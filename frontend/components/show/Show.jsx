import React from 'react';

import Timeline from './Timeline';
import Diffy    from './Diffy';

export default class extends React.Component {
  render () {
    const { props } = this;
    return(
      <div className="show-container">
        <Timeline {...props} />
        <Diffy {...props} />
      </div>
    );
  }
}