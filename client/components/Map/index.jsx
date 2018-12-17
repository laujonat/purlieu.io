import React from "react"
import MapStyle from "./map_style"

export default class Map extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userLocation: null,
      userAddress: null,
      status: "",
      loading: false
    }

    this.geocoder = new google.maps.Geocoder();
    this.directionsServiceObject = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
  }

  componentDidMount() {
    this.getUserLocation();
    this.initializeMap();
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
      console.log("Marker moved")
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

  resetMarkerPositionOnClick = centerMarker => {
    const newPosition = centerMarker.getPosition()
    this.geocodeLocation(newPosition)
    this.centerMap(newPosition)
  }

  centerMap = locationLatLng => {
    this.map.setCenter(locationLatLng)
    this.marker.setPosition(locationLatLng)
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
        status: "could not fetch location",
        userAddress: null
      });
    };

    this.setState({ status: "fetching location" }, () => {
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
    console.log(this.state.status)
    return (
      <div className="map-component">
        <div ref="renderedMap" id="map-container" />
      </div>
    )
  }
}
