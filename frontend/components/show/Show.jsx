import React from 'react';

import Timeline from './Timeline';
import GitDiff  from './GitDiff';
import Diffy    from './Diffy';

export default class extends React.Component {
  render () {
    return(
      <div className="show-">
        <Timeline />
        <GitDiff />
        <Diffy />
      </div>
    );
  }
}