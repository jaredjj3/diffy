import React from 'react';

import Timeline from './Timeline';
import GitDiff  from './GitDiff';
import Diffy    from './Diffy';

export default class extends React.Component {
  render () {
    const { props } = this;
    return(
      <div className="show-container">
        <Timeline {...props} />
        <GitDiff {...props} />
        <Diffy {...props} />
      </div>
    );
  }
}