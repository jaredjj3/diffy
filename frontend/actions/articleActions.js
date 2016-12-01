export const UPDATE_AUTHOR = 'UPDATE_AUTHOR';
export const UPDATE_BODY = 'UPDATE_BODY';
export const RESET_ARTICLE = 'RESET_ARTICLE';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';

export const updateAuthor = author => ({
  type: UPDATE_AUTHOR,
  author
});

export const updateBody = body => ({
  type: UPDATE_BODY,
  body
});

export const resetArticle = () => ({
  type: RESET_ARTICLE
});

export const updateArticle = article => ({
  type: UPDATE_ARTICLE,
  article
});