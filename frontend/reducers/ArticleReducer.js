import preloadedState from '../store/preloadedState';
import {
  UPDATE_BODY,
  DECREASE_INDEX,
  INCREASE_INDEX,
  ADD_HISTORY,
  GOTO_INDEX
} from '../actions/articleActions';
import GitDiffGenerator from '../util/GitDiffGenerator';

const _defaultState = Object.freeze(preloadedState.article);

export default (state = _defaultState, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  const dupedHistory = [];
  for (let i = 0; i < state.history.length; i++) {
    dupedHistory.push(Object.assign({}, state.history[i]));
  }
  nextState.history = dupedHistory;
  switch (action.type) {
    case UPDATE_BODY:
      nextState.history[state.index].body = action.body;
      return nextState;
    case DECREASE_INDEX:
      nextState.index -= nextState.index > 0 ? 1 : 0;
      return nextState;
    case INCREASE_INDEX:
      nextState.index += nextState.index < state.history.length - 1 ? 1 : 0;
      return nextState;
    case ADD_HISTORY:
      nextState.index = nextState.history.length;
      nextState.history.push(action.history);    
      return nextState;
    case GOTO_INDEX:
      nextState.index = action.index;
      return nextState;
    default:
      return nextState;
  }
};