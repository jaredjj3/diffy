import React from 'react';
import GitDiffGenerator from '../../util/GitDiffGenerator';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      body: this.props.body,
      author: this.props.author
    };
  }

  componentDidMount () {
    this.textEditor = document.getElementById('text-editor');
    this.noChangeError = document.getElementById('no-change-error');
    this.changeNotice = document.getElementById('change-notice');
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      body: nextProps.body,
      author: nextProps.author
    });
  }
  
  render () {
    return(
      <div className="editor-container">
        <ul className="editor-controls">
          <li className="author-dropdown">
            author<i className="material-icons">arrow_drop_down</i>
            <ul className="author-dropdown-content">
              <li onClick={this.onAuthorClick('Jane Doe')}>Jane Doe</li>
              <li onClick={this.onAuthorClick('John Smith')}>John Smith</li>
            </ul>
          </li>
          <li className="editor-indexer" onClick={this.onPrevClick.bind(this)}>
            prev<i className="material-icons">undo</i>
            <div className="tooltip">Unsaved changes will be lost</div>
          </li>
          <li className="editor-indexer" onClick={this.onNextClick.bind(this)}>
            next<i className="material-icons">redo</i>
            <div className="tooltip">Unsaved changes will be lost</div>
          </li>
          <li className="editor-save" onClick={this.onSaveClick.bind(this)}>
            save<i className="material-icons golden">assignment_turned_in</i>
            <div id="no-change-error" className="tooltip no-changes">No changes detected</div>
            <div id="change-notice" className="tooltip changed">Saved</div>
          </li>
        </ul>
        <div className="click-to-edit" onClick={this.onBodyClick.bind(this)}>
          <h1>
            Start <span className={this.state.isEditing ? 'editing' : 'not-editing'}>editing</span>, {this.state.author}. It's easy. {this.props.indexStr}
          </h1>
          <textarea 
            id="text-editor" 
            value={this.state.body} 
            className="text-editor"
            onChange={this.onBodyChange.bind(this)}
          ></textarea>
        </div>
      </div>
    );
  }

  // Event handlers

  onBodyClick (e) {
    this.textEditor.focus();
    this.setState({ isEditing: true });
    this.setEditingTimeout();
  }

  onBodyChange (e) {
    if (this.state.isEditing) {
      window.clearTimeout(window.timeoutHandle);
      this.setEditingTimeout();
    } else {
      this.setState({ isEditing: true });
      this.setEditingTimeout();
    }
    this.setState({ body: e.target.value });
  }

  onSaveClick (e) {
    e.stopPropagation();
    const oldBody = this.props.body;
    const newBody = this.state.body;
    const gdg = new GitDiffGenerator(oldBody, newBody);
    if (gdg.matchFrac() === 0) {
      const klass = this.noChangeError.className;
      this.noChangeError.className += " show-error";
      window.setTimeout(() => {
        this.noChangeError.className = klass;
      }, 3000);
    } else {
      const klass = this.changeNotice.className;
      this.changeNotice.className += " show-error";
      window.setTimeout(() => {
        this.changeNotice.className = klass;
      }, 3000);
      this.props.addHistory({
        author: this.state.author,
        body: newBody,
        matchFrac: gdg.matchFrac(),
        diffs: gdg.getGitDiff(),
        previousVersion: this.props.index + 1
      });
    }
  }

  onAuthorClick (author) {
    return e => {
      this.setState({ author });
    };
  }

  onPrevClick (e) {
    this.props.decreaseIndex();
    this.setState({ body: this.props.body });
  }

  onNextClick (e) {
    this.props.increaseIndex();
    this.setState({ body: this.props.body });
  }

  // helpers

  setEditingTimeout () {
    window.timeoutHandle = setTimeout(() => this.setState({ isEditing: false }), 3000);
  }
}