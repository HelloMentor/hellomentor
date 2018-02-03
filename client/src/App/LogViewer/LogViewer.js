import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import './LogViewer.css';

class LogViewer extends Component {
  state = { log: '' }

  componentDidMount() {
    fetch('/logs/example')
      .then(res => res.json())
      .then(exampleLog => this.setState({ log: exampleLog[0].data }));
  }

  render() {
    return (
      <Container textAlign='left' style={{ marginTop: '7em' }}>
        {this.state.log}
      </Container>
    );
  }
}

export default LogViewer;
