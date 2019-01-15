import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import PropTypes from "prop-types"
import { mapOptions, createMarker } from "../../lib/map"
import { receiveClientLocation, receiveMarkerLocation, receiveDrawPolygon } from "./actions"

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

    if (prevProps.polygonList !== this.props.polygonList) {
      this.drawBoundaries()
    }
  }

  initializeMap = () => {
    const { location } = this.props
    this.map = new google.maps.Map(this.renderedMap.current, mapOptions(location))

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

  drawBoundaries = () => {
    const { markers, polygonList } = this.props
    const location = markers[markers.length - 1]
    createMarker(location, this.map)
    this.props.drawPolygon(location, polygonList[polygonList.length - 1].boundaries, this.map)
  }

  render() {
    return (
      <Container>
        <MapComponent ref={this.renderedMap} />
      </Container>
    )
  }
}

const mapStateToProps = ({ map, polygonList, boundaries }) => ({
  markers: boundaries.markers,
  location: map.location,
  address: map.address,
  polygonList
})

const mapDispatchToProps = dispatch => ({
  fetchClientLocation: () => dispatch(receiveClientLocation()),
  setMarkerAddress: geoLocation => dispatch(receiveMarkerLocation(geoLocation)),
  drawPolygon: (location, boundaries, map) => dispatch(receiveDrawPolygon({ location, boundaries, map }))
})

Map.defaultProps = {
  location: {
    lat: 37.773972,
    lng: -122.431297
  },
  address: "",
  polygonList: [],
  setMarkerAddress: () => {},
  drawPolygon: () => {},
  markers: []
}

Map.propTypes = {
  fetchClientLocation: PropTypes.func,
  setMarkerAddress: PropTypes.func,
  drawPolygon: PropTypes.func,
  location: PropTypes.object,
  address: PropTypes.string,
  polygonList: PropTypes.array,
  markers: PropTypes.array
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)
