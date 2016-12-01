import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      body: this.props.body
    };
  }

  componentDidMount () {
    this.textEditor = document.getElementById('text-editor');
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
          <li onClick={this.onUpdateClick.bind(this)}>
            update<i className="material-icons golden">assignment_turned_in</i>
          </li>
        </ul>
        <div className="click-to-edit" onClick={this.onBodyClick.bind(this)}>
          <h1>
            Start <span className={this.state.isEditing ? 'editing' : 'not-editing'}>editing</span>, {this.props.author}. It's easy. {this.props.indexStr}
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

  onUpdateClick (e) {
    e.stopPropagation();
    this.props.generateGitDiff(this.props.body);
  }

  onAuthorClick (author) {
    return e => {
      this.props.updateAuthor(author);
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