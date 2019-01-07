import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import PropTypes from "prop-types"
import MapStyle from "../../lib/styles/map_style"
import {
  fetchLocation,
  receiveClientLocation,
  receiveMarkerLocation
} from "./actions"

import { receiveDrawPolygon } from "../../boundaries/actions"

const Container = styled.div`
  flex: 1 1 70%;
`

const MapComponent = styled.div`
  height: 100%;
  width: 100%;
`

const google = global.google

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

  drawBoundaries = () => {
    const { location, boundaries } = this.props
    this.props.drawPolygon(location, boundaries[0].boundaries, this.map)
  }

  render() {
    return (
      <Container>
        <MapComponent ref={this.renderedMap} />
      </Container>
    )
  }
}

const mapStateToProps = ({ map, boundaries }) => ({
  location: map.clientLocation.location,
  address: map.clientLocation.address,
  boundaries: boundaries
})

const mapDispatchToProps = dispatch => ({
  fetchClientLocation: () => dispatch(receiveClientLocation()),
  setMarkerAddress: geoLocation => dispatch(receiveMarkerLocation(geoLocation)),
  drawPolygon: (location, boundaries, map) =>
    dispatch(receiveDrawPolygon({ location, boundaries, map })),
  setFetchingState: () => dispatch(fetchLocation())
})

Map.defaultProps = {
  location: {
    lat: 37.773972,
    lng: -122.431297
  },
  address: undefined,
  setMarkerAddress: () => {},
  drawPolygon: () => {}
}

Map.propTypes = {
  fetchClientLocation: PropTypes.func,
  setMarkerAddress: PropTypes.func,
  drawPolygon: PropTypes.func,
  location: PropTypes.object,
  address: PropTypes.string,
  boundaries: PropTypes.array
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)
