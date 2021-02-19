import { GET_TEXT } from '../actions/types'

const initialState = {
  text: [],
}

export const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEXT:
      return { ...state, text: action.payload }
    default:
      return state
  }
}
