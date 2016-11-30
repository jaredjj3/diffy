import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
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
          <li>update<i className="material-icons golden">assignment_turned_in</i></li>
        </ul>
        <div className="click-to-edit" onClick={this.onBodyClick.bind(this)}>
          <h1>
            Start <span className={this.state.isEditing ? 'editing' : 'not-editing'}>editing</span>, {this.props.author}. It's easy.
          </h1>
          <textarea 
            id="text-editor" 
            value={this.props.body} 
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
    setTimeout(() => this.setState({ isEditing: false }), 3000);
  }

  onBodyChange (e) {
    this.props.updateBody(e.target.value);
  }

  onUpdateClick (e) {
    e.stopPropagation();
  }

  onAuthorClick (author) {
    return e => {
      this.props.updateAuthor(author);
    };
  }
}