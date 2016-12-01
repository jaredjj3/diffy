import preloadedState from '../store/preloadedState';
import {
  UPDATE_AUTHOR,
  UPDATE_BODY,
  RESET_ARTICLE,
  UPDATE_ARTICLE,
  GENERATE_GIT_DIFF
} from '../actions/articleActions';

const _defaultState = Object.freeze(preloadedState.article);

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
    case RESET_ARTICLE:
      return _defaultState;
    case UPDATE_ARTICLE:
      return action.article;
    case GENERATE_GIT_DIFF:
      
      return nextState;
    default:
      return nextState;
  }
};