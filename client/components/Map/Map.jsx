import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { mapOptions } from "../../shared/map"
import { receiveMap, receiveClientLocation, receiveMarkerLocation, receiveDrawPolygon } from "./actions"
import { Container, MapComponent } from "./styles"

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

    if (prevProps.mapPolygons.length !== this.props.mapPolygons.length) {
      const { drawPolygon, location, mapPolygons } = this.props
      drawPolygon({
        cardIdx: mapPolygons.length - 1,
        location,
        boundaries: mapPolygons[mapPolygons.length - 1],
        map: this.map
      })
    }
  }

  initializeMap = () => {
    const { location, setMap } = this.props
    this.map = new google.maps.Map(this.renderedMap.current, mapOptions(location))
    setMap(this.map)

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

  render() {
    return (
      <Container>
        <MapComponent ref={this.renderedMap} />
      </Container>
    )
  }
}

const mapStateToProps = ({ map, polygonList }) => ({
  location: map.location,
  address: map.address,
  mapPolygons: map.boundaries,
  polygonList
})

const mapDispatchToProps = dispatch => ({
  setMap: map => dispatch(receiveMap(map)),
  fetchClientLocation: () => dispatch(receiveClientLocation()),
  setMarkerAddress: geoLocation => dispatch(receiveMarkerLocation(geoLocation)),
  drawPolygon: ({ cardIdx, location, boundaries, map }) =>
    dispatch(receiveDrawPolygon({ cardIdx, location, boundaries, map }))
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
  setMap: () => {}
}

Map.propTypes = {
  fetchClientLocation: PropTypes.func,
  setMarkerAddress: PropTypes.func,
  drawPolygon: PropTypes.func,
  location: PropTypes.object,
  address: PropTypes.string,
  mapPolygons: PropTypes.array,
  polygonList: PropTypes.array,
  setMap: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)
