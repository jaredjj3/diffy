import {
  UPDATE_AUTHOR,
  UPDATE_BODY
} from '../actions/articleActions';

const _defaultState = Object.freeze({
  author: "",
  body: ""
});

export default (state = _defaultState, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case UPDATE_AUTHOR:
      nextState.author = action.author;
      return nextState;
    case UPDATE_BODY:
      nextState.body = action.body;
      return nextState;
    default:
      return nextState;
  }
};