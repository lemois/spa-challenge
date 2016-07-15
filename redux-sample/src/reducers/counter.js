import { COUNT_UP, REQUEST_RANDOM_COUNT, RECEIVE_RANDOM_COUNT } from '../actions'

const counter = (state = {
  value: 0,
  fetching: false
}, action) => {
  switch (action.type) {
    case COUNT_UP:
    case RECEIVE_RANDOM_COUNT:
      return Object.assign({}, state, {
        value: state.value + action.value,
        fetching: false
      });
    case REQUEST_RANDOM_COUNT:
      return Object.assign({}, state, {
        fetching: true
      });
    default:
      return state;
  }
};

const counterByTarget = (state = {}, action) => {
  switch (action.type) {
    case COUNT_UP:
    case RECEIVE_RANDOM_COUNT:
    case REQUEST_RANDOM_COUNT:
      return Object.assign({}, state, {
        [action.target]: counter(state[action.target], action)
      });
    default:
      return state;
  }
}

export default counterByTarget;
