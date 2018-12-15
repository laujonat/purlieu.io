import React from "react"
import InputForm from "../InputForm"
import MapStyle from "./map_style"
import { Loading } from "../Loading"
import async from "async"
import axios from 'axios'

export default class Map extends React.Component {
  constructor(props) {
    super(props)
    this.rideTypes = ["lyft", "lyft_plus", "lyft_line"];

    this.state = {
      userLocation: null,
      userAddress: null,
      status: "",
      newBoundary: {},
      loading: false
    }

    this.geocoder = new google.maps.Geocoder();
    this.directionsServiceObject = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.googleGeometry = google.maps.geometry.spherical;
  }

  componentDidMount() {
    this.getUserLocation();
    this.initializeMap();
  }

  getBoundaries = async (dollarInput, userLocation, type = 'lyft') => {
    const amount = parseInt(dollarInput);
    const stdDev = 2;
    const defaultRadiusInMeters = 32000;
    const rideType = type || this.state.rideType;

    // Array of directions in degrees
    let directions = [];
    for (let i = 0; i < 360; i += 45) {
      directions.push(i);
    }

    // Center of polygon
    let currentLatLng;
    try {
      currentLatLng = typeof userLocation === 'string' ?
        await this.parseAddressToLatLng(userLocation) : (userLocation || this.state.addressLatLng);
    } catch (err) {
      console.log(err);
    }
  
    this.resetMap();
    this.setState({ loading: true }, () => {
      async.eachOf(directions, (direction, index) => {
        const endLatLng = new this.googleGeometry.computeOffset(
          currentLatLng,
          defaultRadiusInMeters,
          direction
        )
        this.rideEstimate(
          currentLatLng,
          endLatLng,
          amount,
          stdDev,
          index,
          directions.length,
          direction,
          [],
          rideType
        )
      })
    });
  }

  rideEstimate = async function(
    start,
    end,
    amount,
    stdDev,
    index,
    numDirections,
    direction,
    history,
    rideType
  ) {
    let result
    const requestType = rideType
    await axios
      .get("/rideEstimate", {
        params: {
          start_lat: start.lat(),
          start_lng: start.lng(),
          end_lat: end.lat(),
          end_lng: end.lng(),
          ride_type: requestType
        }
      })
      .then(res => {
        result = res
      })
      .catch(errors => {})
  
    if (result.data) {
      let primetimeString = result.data.cost_estimates[0].primetime_percentage
      let primetimePercentage = parseFloat(primetimeString) / 100.0
      let baseCost = result.data.cost_estimates[0].estimated_cost_cents_max / 100
      let estimate = primetimePercentage * baseCost + baseCost
  
      if (result.data.cost_estimates[0].can_request_ride) {
        if (
          (estimate < amount + stdDev && estimate > amount - stdDev) ||
          history.length > 8
        ) {
          let newBoundaries = Object.assign({}, this.state.boundaries)
          newBoundaries[index] = end
          this.setState({ boundaries: newBoundaries }, () => {
            if (Object.keys(this.state.boundaries).length === numDirections) {
              this.setState({ loading: false }, () => {
                this.drawBoundaries(start, this.state.boundaries, rideType);
              });
            }
          })
        } else {
          let ratio = amount / estimate
          const googleGeometry = google.maps.geometry.spherical
          const newDistance = googleGeometry.computeDistanceBetween(start, end)
          const newEnd = new googleGeometry.computeOffset(
            start,
            ratio * newDistance,
            direction
          )
          history.push(newEnd)
          this.rideEstimate(
            start,
            newEnd,
            amount,
            stdDev,
            index,
            numDirections,
            direction,
            history,
            rideType
          )
        }
      } else {
        const googleGeometry = google.maps.geometry.spherical
        const newDistance = googleGeometry.computeDistanceBetween(start, end) / 2
        const newEnd = new googleGeometry.computeOffset(
          start,
          newDistance,
          direction
        )
        history.push(newEnd)
        this.rideEstimate(
          start,
          newEnd,
          amount,
          stdDev,
          index,
          numDirections,
          direction,
          history,
          rideType
        )
      }
    }
  }

  landOrWater = function(position, map, callback) {
    const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${position.lat()},${position.lng()}&zoom=${map.getZoom()}&size=1x1&maptype=roadmap&key=${
      process.env.GOOGLE_API_KEY
    }`
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
  
    const image = new Image()
    image.crossOrigin = "Anonymous"
    image.src = mapUrl
  
    image.onload = () => {
      canvas.width = image.width
      canvas.height = image.height
      canvas.getContext("2d").drawImage(image, 0, 0, image.width, image.height)
      const pixelData = canvas.getContext("2d").getImageData(0, 0, 1, 1).data
  
      if (
        pixelData[0] > 160 &&
        pixelData[0] < 181 &&
        pixelData[1] > 190 &&
        pixelData[1] < 210
      ) {
        callback("water")
      } else {
        callback("land")
      }
    }
  }

  recalculateBoundary = function(
    position,
    boundary,
    map,
    direction,
    callback
  ) {
    this.landOrWater(boundary, map, res => {
      if (res === "land") callback(boundary)
      else {
        const googleGeometry = google.maps.geometry.spherical
        const midPoint =
          googleGeometry.computeDistanceBetween(boundary, position) / 2
  
        if (midPoint <= 250) {
          callback(boundary)
        } else {
          const midLatLng = new googleGeometry.computeOffset(
            position,
            midPoint,
            direction
          )
          this.landOrWater(midLatLng, map, res => {
            if (res === "water")
            this.recalculateBoundary(position, midLatLng, map, direction, callback)
            else
            this.recalculateBoundary(midLatLng, boundary, map, direction, callback)
          })
        }
      }
    })
  }

  parseAddressToLatLng = (address) =>
    new Promise((resolve, reject) => {
      this.geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
          const addressLatLng = new google.maps.LatLng(
            results[0].geometry.location.lat(),
            results[0].geometry.location.lng()
          );
          this.centerMap(addressLatLng);
          resolve(addressLatLng);
        } else {
          reject(new Error('Couldnt\'t find the location ' + address));
        }
      });
    })

  drawBoundaries = (currentPos, boundaries, rideType = 'lyft') => {
    const boundariesArray = []
    const recalculatedBoundaries = []
    const numBoundaries = Object.keys(boundaries).length
    let numRecalculatedBoundaries = 0
  
    for (let i = 0; i < numBoundaries; i++) {
      boundariesArray.push(boundaries[i])
      recalculatedBoundaries.push(i)
    }
  
    boundariesArray.forEach((boundary, index) => {
      let direction = (360 / numBoundaries) * index
  
      let newRideType = rideType
      // console.log("rideType", rideType);
      this.recalculateBoundary(currentPos, boundary, this.map, direction, res => {
        recalculatedBoundaries[index] = res
        numRecalculatedBoundaries++
  
        if (numRecalculatedBoundaries === numBoundaries) {
          // if (this.state.newBoundary[rideType] !== undefined) {
          if (this.state.newBoundary[rideType]) {
            this.state.newBoundary[rideType].setMap(null)
          } else {
            const color = {
              lyft: "#f7a0ff",
              lyft_plus: "#ffd691",
              lyft_line: "#ADFF2F"
            }
  
            const bermudaPolygon = new google.maps.Polygon({
              paths: recalculatedBoundaries,
              strokeColor: "#f7a0ff",
              strokeOpacity: 0.7,
              strokeWeight: 0.5,
              fillColor: "#f7a0ff",
              fillOpacity: 0.35
            })
  
            let newBoundary = this.state.newBoundary
            newBoundary[rideType] = bermudaPolygon
            this.setState({ newBoundary, loading: false })
  
            const bounds = new google.maps.LatLngBounds()
            recalculatedBoundaries.forEach(coord => bounds.extend(coord))
            this.map.fitBounds(bounds)
            bermudaPolygon.setMap(this.map)
          }
        }
      })
    })
  }

  mapOptions = center => ({
    center: center,
    zoom: 13,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    styles: MapStyle
  })

  initializeMap = () => {
    const sfCenter = {
      lat: 37.773972,
      lng: -122.431297
    };
    const center = this.state.userLocation || sfCenter;

    this.map = new google.maps.Map(
      this.refs.renderedMap,
      this.mapOptions(center)
    );

    this.marker = new google.maps.Marker({
      position: center,
      map: this.map,
      draggable: true
    });

    this.marker.addListener("dragend", () =>
      this.resetMarkerPositionOnClick(this.marker)
    );
    this.marker.addListener("click", () =>
      this.resetMarkerPositionOnClick(this.marker)
    );
    this.map.addListener("click", e => {
      this.marker.setPosition(e.latLng);
      this.resetMarkerPositionOnClick(this.marker);
    });
  }

  geocodeLocation = latLngObject => {
    const geocoder = new google.maps.Geocoder()
    geocoder.geocode({ location: latLngObject }, (results, status) => {
      if (status === "OK") {
        this.setState({ userAddress: results[0].formatted_address })
      }
    })
  }

  clearOverlay = rideType => {
    this.state.newBoundary[rideType].setMap(null)

    const currentBoundaries = this.state.newBoundary
    delete currentBoundaries[rideType]
    this.setState({ newBoundary: currentBoundaries })
  }

  resetMarkerPositionOnClick = centerMarker => {
    this.resetMap()
    const newPosition = centerMarker.getPosition()
    this.geocodeLocation(newPosition)
    this.centerMap(newPosition)
  }

  centerMap = locationLatLng => {
    this.map.setCenter(locationLatLng)
    this.marker.setPosition(locationLatLng)
  }

  resetMap = () => {
    this.rideTypes.map(type => {
      if (this.state.newBoundary[type]) {
        this.clearOverlay(type)
      }
    })

    let elements = document.getElementsByClassName("selected")
    while (elements.length > 0) {
      elements[0].classList.remove("selected")
    }
  }

  getUserLocation = () => {
    const successCallback = position => {
      const parsedLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      this.geocodeLocation(parsedLocation);
      this.marker.setPosition(parsedLocation);
      this.centerMap(parsedLocation);
      this.setState({
        userLocation: parsedLocation,
        status: ''
      });
    };

    const errorCallback = () => {
      this.setState({
        status: "SORRY, COULDN'T FIND YOU...",
        userAddress: null
      });
    };

    this.setState({ status: "FETCHING CURRENT LOCATION" }, () => {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
        timeout: 10000,
        enableHighAccuracy: true
      });
    });
  }

  newMarker = pos => {
    new google.maps.Marker({
      position: pos,
      map: this.map,
      title: `${pos.lat()}, ${pos.lng()}`,
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
        scaledSize: new google.maps.Size(20, 20)
      }
    })
  }

  render() {
    let form
    let { loading, status, userAddress } = this.state;
    if (loading) {
      loading = (
        <Loading>
          <p id="loading-text">CALCULATING DISTANCE</p>
        </Loading>
      )
    }

    if (userAddress) {
      form = (
        <InputForm
          currentAddress={userAddress}
          onSubmit={this.getBoundaries}
        />
      )
    } else {
      form = ( 
        <Loading customClasses="fetch-location">
          <img
            className="fetch-location-img"
            src="https://i.imgur.com/P0CmA6f.png"
          />
          <p className="status">{status}</p>
          <p className="wait-text">Please wait...</p>
        </Loading>
      )
    }
    return (
      <div className="map-component">
        <div ref="renderedMap" id="map-container" />
        {loading}
        {form}
      </div>
    )
  }
}
