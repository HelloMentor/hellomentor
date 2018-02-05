import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import UserViewer from './UserViewer/UserViewer';
import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Header />
        <UserViewer />
      </Container>
    );
  }
}

export default App;
