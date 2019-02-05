import { colors, mapStyle } from "../../lib/styles"

const google = global.google

export const mapOptions = center => ({
  center: center,
  zoom: 13,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: false,
  styles: mapStyle
})

export const createMarker = (position, map, drop = "drop") =>
  new google.maps.Marker({
    position,
    animation: drop === "drop" ? google.maps.Animation.DROP : null,
    icon: {
      path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
      scale: 5,
      strokeWeight: 3,
      fillOpacity: 1.0,
      fillColor: colors.lightBlue
    },
    map: map
  })

export const createPolygon = (boundaries, map, card) =>
  new google.maps.Polygon({
    paths: boundaries,
    strokeColor: `${colors[card.rideType]}`,
    strokeOpacity: 1,
    strokeWeight: 2,
    fillColor: `${colors[card.rideType]}`,
    fillOpacity: 0.2,
    geodesic: true,
    clickable: true,
    map
  })

export default {
  mapOptions,
  createMarker,
  createPolygon
}
