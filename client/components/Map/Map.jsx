import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import PropTypes from "prop-types"
import MapStyle from "./map_style"
import { receiveClientAddress, receiveMarkerLocation } from "../../actions"

const google = window.google

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

    // this.state = {
    //   location: null,
    //   address: null
    // }

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

    this.marker.addListener("dragend", () =>
      this.resetMarkerPositionOnClick(this.marker)
    )

    this.marker.addListener("click", () => {
      this.resetMarkerPositionOnClick(this.marker)
    })

    this.map.addListener("click", e => {
      this.marker.setPosition(e.latLng)
      this.props.fetchMarkerAddress(location)
      this.resetMarkerPositionOnClick(this.marker)
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
    this.props.fetchClientAddress()
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
    return (
      <MapComponent>
        <MapContainer ref={this.renderedMap} />
      </MapComponent>
    )
  }
}

const mapStateToProps = ({ entities: { map } }) => ({
  location: map.clientLocation.location,
  address: map.clientLocation.address
})

const mapDispatchToProps = dispatch => ({
  fetchClientAddress: address => dispatch(receiveClientAddress(address)),
  fetchMarkerAddress: geoLocation =>
    dispatch(receiveMarkerLocation(geoLocation))
})

Map.defaultProps = {
  location: {
    lat: 37.773972,
    lng: -122.431297
  },
  address: ""
}

Map.propTypes = {
  fetchClientAddress: PropTypes.func,
  fetchMarkerAddress: PropTypes.func,
  location: PropTypes.object,
  address: PropTypes.string
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)
