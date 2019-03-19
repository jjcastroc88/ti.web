import React, { Component } from 'react';
import './clientView.scss';

class ClientView extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="contact-container">
        <h1>Clients</h1>
      </div>
    );
  }
}

export default ClientView;