import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      body: props.body,
      author: props.author
    };
  }

  componentDidMount () {
    this.textEditor = document.getElementById('text-editor');
  }
  
  render () {
    return(
      <div className="editor-container">
        <ul className="editor-controls">
          <li>CONTROL 1</li>
          <li>CONTROL 2</li>
        </ul>
        <div className="click-to-edit" onClick={this.onBodyClick.bind(this)}>
          <h1>
            Start <span className={this.state.isEditing ? 'editing' : ''}>editing</span>, {this.state.author}. It's easy.
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
    this.setState({
      isEditing: true
    });
  }

  onBodyChange (e) {
    this.setState({
      body: e.target.value
    });
  }

  onUpdateClick (e) {
    e.stopPropagation();
  }
}