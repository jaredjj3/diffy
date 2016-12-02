export const UPDATE_BODY = 'UPDATE_BODY';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const DECREASE_INDEX = 'DECREASE_INDEX';
export const INCREASE_INDEX = 'INCREASE_INDEX';
export const GOTO_INDEX = 'GOTO_INDEX';
export const ADD_HISTORY = 'ADD_HISTORY';

export const updateBody = body => ({
  type: UPDATE_BODY,
  body
});

export const updateArticle = article => ({
  type: UPDATE_ARTICLE,
  article
});

export const decreaseIndex = () => ({
  type: DECREASE_INDEX
});

export const increaseIndex = () => ({
  type: INCREASE_INDEX
});

export const addHistory = history => ({
  type: ADD_HISTORY,
  history
});

export const gotoIndex = index => ({
  type: GOTO_INDEX,
  index
});