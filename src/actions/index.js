import axios from 'axios'

export const CREATE_EVENT = 'CREATE_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'

// export const putEvent = values => async dispatch => {
//   const response = await axios.put(`http://158.101.74.170`, values)
//   dispatch({ type: UPDATE_EVENT, response })
// }
export const postEvent = values => async dispatch => {
  const response = await axios.post(`http://158.101.74.170`, values)
  dispatch({ type: CREATE_EVENT, response })
}


