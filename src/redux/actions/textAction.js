import { GET_TEXT } from './types'
import axios from 'axios'

export function getText(id, ru) {
  return async (dispatch) => {
    try {
      if (ru === false) {
        await axios
          .get(
            `https://baconipsum.com/api/?type=all-meat&sentences=4&start-with-lorem=${id}`
          )
          .then((data) => dispatch({ type: GET_TEXT, payload: data.data }))
      } else {
        await axios
          .get('https://fish-text.ru/get?type=sentence?&number=1')
          .then((data) =>
            dispatch({ type: GET_TEXT, payload: [data.data.text] })
          )
      }
    } catch (e) {
      console.error(e)
    }
  }
}
