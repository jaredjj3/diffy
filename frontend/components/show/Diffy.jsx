import React from 'react';

export default class extends React.Component {
  render () {
    return(
      <div className="diffy-container">
        <h1>{`Version ${this.props.index + 1} by ${this.props.article.author}`}</h1>
        <ul>

        </ul>
      </div>
    );
  }
}