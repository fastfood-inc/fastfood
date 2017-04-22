import { SET_RESTAURANTS } from '../actions';

export default function restaurants(state = [], action) {
  switch(action.type) {
    case SET_RESTAURANTS:
      return action.payload;
    default:
      return state;
  }
}
