
import {
  CREATE_EVENT,
  UPDATE_EVENT
} from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data
      return { ...events, [data.id]: data }

    default:
      return events
  }
}
