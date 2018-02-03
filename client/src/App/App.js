import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import LogViewer from './LogViewer/LogViewer';
import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Header />
        <LogViewer />
      </Container>
    );
  }
}

export default App;
