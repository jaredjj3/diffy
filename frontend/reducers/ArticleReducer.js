const _defaultState = Object.freeze({

});

export default (state = _defaultState, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    default:
      return nextState;
  }
};