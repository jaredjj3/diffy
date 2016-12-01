export const UPDATE_AUTHOR = 'UPDATE_AUTHOR';
export const UPDATE_BODY = 'UPDATE_BODY';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const GENERATE_GIT_DIFF = 'GENERATE_GIT_DIFF';
export const DECREASE_INDEX = 'DECREASE_INDEX';
export const INCREASE_INDEX = 'INCREASE_INDEX';

export const updateAuthor = author => ({
  type: UPDATE_AUTHOR,
  author
});

export const updateBody = body => ({
  type: UPDATE_BODY,
  body
});

export const updateArticle = article => ({
  type: UPDATE_ARTICLE,
  article
});

export const generateGitDiff = body => ({
  type: GENERATE_GIT_DIFF,
  body
});

export const decreaseIndex = () => ({
  type: DECREASE_INDEX
});

export const increaseIndex = () => ({
  type: INCREASE_INDEX
});