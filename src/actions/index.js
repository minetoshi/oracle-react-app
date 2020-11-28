import axios from 'axios'

export const CREATE_EVENT = 'CREATE_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'

export const putEvent = values => async dispatch => {
  const response = await axios.put(`http://localhost:8080/estimate/medical/getfee`, values)
  dispatch({ type: UPDATE_EVENT, response })
}
export const postEvent = values => async dispatch => {
  const response = await axios.post(`http://localhost:8080/estimate/medical/getfee}`, values)
  dispatch({ type: CREATE_EVENT, response })
}


