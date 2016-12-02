import React from 'react';
import {
  NONE,
  ADDED,
  REMOVED
} from '../../util/GitDiffGenerator';

export default class extends React.Component {
  render () {
    const diffyListItems = this.props.article.diffs.map( (diff, idx) => {
      let klass;
      switch (diff.type) {
        case NONE:
          klass = 'none';
          break;
        case ADDED:
          klass = 'added';
          break;
        case REMOVED:
          klass = 'removed';
          break;
      }
      const id = `vis-${idx}`;
      return(
        <li key={idx} onClick={this.onRemovedClick(id)}>
          <div className={`diff-indicator ${klass}`}>
            {diff.type === REMOVED ? <i id={id} className="material-icons">visibility</i> : ''}
          </div>
          {diff.lines}
        </li>
      );
    });
    return(
      <div className="diffy-container">
        <h1>{`Version ${this.props.index + 1} by ${this.props.article.author}`}</h1>
        <ul className="diffy-list">
          {diffyListItems}
        </ul>
      </div>
    );
  }

  // event handler

  onRemovedClick (id) {
    return e => {
      const el = document.getElementById(id);
      if (el.innerHTML === 'visibility') {
        el.innerHTML = 'visibility_off';
      } else {
        el.innerHTML = 'visibility';
      }
    };
  }
}