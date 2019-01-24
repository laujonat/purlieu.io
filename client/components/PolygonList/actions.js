export const DELETE_POLYGON_CARD = "DELETE_POLYGON_CARD"
export const RECEIVE_POLYGON_CARD_SUCCESS = "RECEIVE_POLYGON_CARD_SUCCESS"
export const RECEIVE_POLYGON_CARD_ERROR = "RECEIVE_POLYGON_CARD_ERROR"
export const RECEIVE_POLYGON_CARD = "RECEIVE_POLYGON_CARD"

export const receivePolygonCard = data => ({
  type: RECEIVE_POLYGON_CARD,
  data
})

export const deletePolygonCard = data => ({
  type: DELETE_POLYGON_CARD,
  data
})

export const receivePolygonCardSuccess = data => ({
  type: RECEIVE_POLYGON_CARD_SUCCESS,
  data
})

export const receivePolygonCardError = data => ({
  type: RECEIVE_POLYGON_CARD_ERROR,
  data
})
