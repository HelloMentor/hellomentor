import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'

class Landing extends Component {
  state = { }

  constructor(props) {
    super();
  }

  componentDidMount() {
  }

  render() {
    return (
      <Container style={{ marginTop: '7em' }}>
        Landing
      </Container>
    );
  }
}

export default Landing;
