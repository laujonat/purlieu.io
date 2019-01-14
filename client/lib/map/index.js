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

export const createMarker = (position, map) => {
  new google.maps.Marker({
    position,
    icon: {
      path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
      scale: 5,
      strokeWeight: 2,
      fillOpacity: 1.0,
      fillColor: colors.lightBlue
    },
    map: map
  })
}

export default {
  mapOptions,
  createMarker
}
