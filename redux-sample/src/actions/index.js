import fetch from 'isomorphic-fetch';

// action types
export const COUNT_UP = 'COUNT_UP';
export const REQUEST_RANDOM_COUNT = 'REQUEST_RANDOM_COUNT';
export const RECEIVE_RANDOM_COUNT = 'RECEIVE_RANDOM_COUNT';

// action creators
export const countUp = (target, value = 1) => (
  {
    type: COUNT_UP,
    value,
    target
  }
);

const requestRandom = (target) => (
  {
    type: REQUEST_RANDOM_COUNT,
    target
  }
);

const receiveRandom = (target, json) => (
  {
    type: RECEIVE_RANDOM_COUNT,
    value: json.value,
    target
  }
);

export const fetchRandom = (target) =>
  (dispatch) => {
    dispatch(requestRandom(target));
    return fetch('/random')
      .then(response => response.json())
      .then(json => {
        console.log('test', json);
        dispatch(receiveRandom(target, json))
      })
  }

