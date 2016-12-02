import React from 'react';

export default class extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      expanded: true
    };
  }
  
  componentDidMount () {
    this.timelineContainer = document.getElementById('timeline-container');
    this.zippy = document.getElementById('zippy');
  }

  render () {
    const historyListItems = this.props.history.map((histObj, idx) => (
      <li key={idx}>
        <h2>Version {idx + 1}</h2>
        <h2>by {histObj.author}</h2>
        <h3>
          {histObj.matchFrac ? `${Math.floor(histObj.matchFrac * 100)}% Δ` : 'Initial'}
        </h3> 
      </li>
    ));
    const { expanded } = this.state;
    return(
      <div id="timeline-container" className="timeline-container">
        <ul className={`history-list ${this.state.expanded ? 'hidden' : 'show'}`}>  
          {historyListItems}
        </ul>
        <div 
          id="zippy"
          className={`zippy ${expanded ? 'expanded' : 'collapsed'}`}
          onClick={this.toggleZippy.bind(this)}
        >
          <i className="material-icons left">{expanded ? 'keyboard_arrow_right' : 'keyboard_arrow_left'}</i>
        </div>
      </div>
    );
  }

  // event handlers

  toggleZippy (e) {
    const expanded = !this.state.expanded;
    this.setState({ expanded });
  }
}