import React        from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App  from './App';
import Home from './Home';
import EditorContainer from './editor/EditorContainer';
import ShowContainer from './show/ShowContainer';

export default ({ store }) => {
  const onEnter = (nextState, replace) => {
    if (nextState.location.pathname === "/") {
      replace('/home');
    }
  };

  const onUpdate = () => window.scrollTo(0, 0);

  return(
    <Provider store={store}>
      <Router history={hashHistory} onUpdate={onUpdate}>
        <Route path="/" component={App} onEnter={onEnter}>
          <Route path="home" component={Home} />
          <Route path="editor" component={EditorContainer} />
          <Route path="show" component={ShowContainer} />
        </Route>
      </Router>
    </Provider>
  );
};