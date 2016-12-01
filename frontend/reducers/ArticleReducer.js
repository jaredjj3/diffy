import preloadedState from '../store/preloadedState';
import {
  UPDATE_AUTHOR,
  UPDATE_BODY,
  UPDATE_ARTICLE,
  GENERATE_GIT_DIFF,
  DECREASE_INDEX,
  INCREASE_INDEX
} from '../actions/articleActions';
import GitDiffGenerator from '../util/GitDiffGenerator';

const _defaultState = Object.freeze(preloadedState.article);

export default (state = _defaultState, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case UPDATE_AUTHOR:
      nextState.author = action.author;
      return nextState;
    case UPDATE_BODY:
      nextState.history[state.index].body = action.body;
      return nextState;
    case UPDATE_ARTICLE:
      return action.article;
    case GENERATE_GIT_DIFF:
      // const gdg = new GitDiffGenerator(oldLines, newLines);
      // gdg.generate();
      return nextState;
    case DECREASE_INDEX:
      nextState.index -= nextState.index > 0 ? 1 : 0;
      return nextState;
    case INCREASE_INDEX:
      nextState.index += nextState.index < state.history.length - 1 ? 1 : 0;
      return nextState;
    default:
      return nextState;
  }
};