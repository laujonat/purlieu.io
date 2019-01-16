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

export const createMarker = (position, map, drop) =>
  new google.maps.Marker({
    position,
    animation: drop === "drop" ? google.maps.Animation.DROP : null,
    icon: {
      path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
      scale: 5,
      strokeWeight: 2,
      fillOpacity: 1.0,
      fillColor: colors.lightBlue
    },
    map: map
  })

export const createPolygon = (boundaries, map, color = "#f7a0ff") =>
  new google.maps.Polygon({
    paths: boundaries,
    strokeColor: color,
    strokeOpacity: 0.7,
    strokeWeight: 0.5,
    fillColor: color,
    fillOpacity: 0.35,
    map
  })

export default {
  mapOptions,
  createMarker,
  createPolygon
}
