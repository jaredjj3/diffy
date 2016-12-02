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
        <li id={`diff-indicator-${idx}`} className={`li-${klass}`} key={idx} onClick={this.onRemovedClick(idx)}>
          <div className={`diff-indicator ${klass}`}>
            {diff.type === REMOVED ? <i id={id} className="material-icons">visibility</i> : ''}
          </div>
          <div className="diff-lines">
            {diff.lines}
          </div>
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

  onRemovedClick (idx) {
    return e => {
      const iconEl = document.getElementById(`vis-${idx}`);
      const liEl = document.getElementById(`diff-indicator-${idx}`);
      if (iconEl.innerHTML === 'visibility') {
        iconEl.innerHTML = 'visibility_off';
        liEl.className += ' shrink';
      } else {
        iconEl.innerHTML = 'visibility';
        liEl.className = liEl.className.replace(' shrink', '');
      }
    };
  }
}