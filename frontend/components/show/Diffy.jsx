import React from 'react';
import {
  NONE,
  ADDED,
  REMOVED
} from '../../util/GitDiffGenerator';
import { Link } from 'react-router';

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
        <li id={`diff-indicator-${idx}`} className={`li-${klass}`} key={idx} onClick={diff.type === REMOVED ? this.onRemovedClick(idx) : () => {}}>
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
        <div className="header">
          <ul className="diffy-controls">
            <li onClick={this.collapseAll.bind(this)}><i className="material-icons">vertical_align_top</i></li>
            <li onClick={this.expandAll.bind(this)}><i className="material-icons">vertical_align_bottom</i></li>
            <li><Link to='editor'><i className="material-icons">mode_edit</i></Link></li>
          </ul>
          <h1>{`Version ${this.props.index + 1} by ${this.props.article.author}`}</h1>
        </div>
        <ul className="diffy-list">
          {diffyListItems}
        </ul>
      </div>
    );
  }

  // event handlers

  collapseAll (e) {
    for (let i = 0; i < this.props.article.diffs.length; i++) {
      const diff = this.props.article.diffs[i];
      if (diff.type === REMOVED) {
        const iconEl = document.getElementById(`vis-${i}`);
        const liEl = document.getElementById(`diff-indicator-${i}`);
        if (iconEl.innerHTML === 'visibility') {
          iconEl.innerHTML = 'visibility_off';
          liEl.className += ' shrink';
        } 
      }
    }
  }

  expandAll (e) {
    for (let i = 0; i < this.props.article.diffs.length; i++) {
      const diff = this.props.article.diffs[i];
      if (diff.type === REMOVED) {
        const iconEl = document.getElementById(`vis-${i}`);
        const liEl = document.getElementById(`diff-indicator-${i}`);
        if (iconEl.innerHTML === 'visibility_off') {
          iconEl.innerHTML = 'visibility';
          liEl.className = liEl.className.replace(' shrink', '');
        } 
      }
    }
  }

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