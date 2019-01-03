import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import PropTypes from "prop-types"
import MapStyle from "../../lib/styles/map_style"
import {
  receiveClientLocation,
  receiveMarkerLocation,
  receiveDrawBoundariesPolygon
} from "../../actions"
import { getRecalculatedBoundaries } from "../../services/map"

// const google = window.google

const MapComponent = styled.div`
  flex: 1 1 70%;
`

const MapContainer = styled.div`
  height: 100%;
  width: 100%;
`

class Map extends Component {
  constructor(props) {
    super(props)

    this.renderedMap = React.createRef()
    this.geocoder = new google.maps.Geocoder()
    this.directionsServiceObject = new google.maps.DirectionsService()
    this.directionsRenderer = new google.maps.DirectionsRenderer()
  }

  componentDidMount() {
    this.initializeMap()
    this.getUserLocation()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.centerMap(this.props.location)
    }

    if (prevProps.boundaries !== this.props.boundaries) {
      this.drawBoundaries()
    }
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
    const { location } = this.props

    this.map = new google.maps.Map(
      this.renderedMap.current,
      this.mapOptions(location)
    )

    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
      draggable: true
    })

    const markerFunc = e => {
      this.resetMarkerPositionOnClick(this.marker)
      this.setMarkerAddress(e.latLng)
    }

    this.marker.addListener("dragend", markerFunc, false)
    this.marker.addListener("click", markerFunc, false)

    this.map.addListener("click", e => {
      this.marker.setPosition(e.latLng)
      markerFunc(e)
    })
  }

  setMarkerAddress = geoLocation => {
    this.props.setMarkerAddress({
      lat: geoLocation.lat(),
      lng: geoLocation.lng()
    })
  }

  resetMarkerPositionOnClick = centerMarker => {
    const newPosition = centerMarker.getPosition()
    this.centerMap(newPosition)
  }

  centerMap = locationLatLng => {
    this.map.setCenter(locationLatLng)
    this.marker.setPosition(locationLatLng)
  }

  getUserLocation = () => {
    this.props.fetchClientLocation()
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

  drawBoundaries = async () => {
    const { location, boundaries } = this.props
    const recalculatedBoundaries = await getRecalculatedBoundaries(
      location,
      boundaries,
      this.map
    )
    const bermudaPolygon = new google.maps.Polygon({
      paths: recalculatedBoundaries,
      strokeColor: "#f7a0ff",
      strokeOpacity: 0.7,
      strokeWeight: 0.5,
      fillColor: "#f7a0ff",
      fillOpacity: 0.35
    })

    const bounds = new google.maps.LatLngBounds()
    recalculatedBoundaries.forEach(coord => bounds.extend(coord))
    this.map.fitBounds(bounds)
    bermudaPolygon.setMap(this.map)
  }

  render() {
    return (
      <MapComponent>
        <MapContainer ref={this.renderedMap} />
      </MapComponent>
    )
  }
}

const mapStateToProps = ({ entities: { map, lyft } }) => ({
  location: map.clientLocation.location,
  address: map.clientLocation.address,
  boundaries: lyft.boundaries
})

const mapDispatchToProps = dispatch => ({
  fetchClientLocation: () => dispatch(receiveClientLocation()),
  setMarkerAddress: geoLocation => dispatch(receiveMarkerLocation(geoLocation)),
  drawPolygon: (location, boundaries) =>
    dispatch(receiveDrawBoundariesPolygon(location, boundaries))
})

Map.defaultProps = {
  location: {
    lat: 37.773972,
    lng: -122.431297
  },
  address: undefined,
  boundaries: [],
  setMarkerAddress: () => {}
}

Map.propTypes = {
  fetchClientLocation: PropTypes.func,
  setMarkerAddress: PropTypes.func,
  location: PropTypes.object,
  address: PropTypes.string,
  boundaries: PropTypes.array
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)
