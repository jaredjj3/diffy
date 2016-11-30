export const UPDATE_AUTHOR = 'UPDATE_AUTHOR';
export const UPDATE_BODY = 'UPDATE_BODY';

export const updateAuthor = author => ({
  type: UPDATE_AUTHOR,
  author
});

export const updateBody = body => ({
  type: UPDATE_BODY,
  body
});