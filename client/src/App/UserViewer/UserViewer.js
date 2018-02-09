import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react'
import './UserViewer.css';

class UserViewer extends Component {
  state = { users: '' }

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.addFakeUser = this.addFakeUser.bind(this);
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => {
        this.setState({ users: JSON.stringify(users) });
      });
  }

  addFakeUser() {
    fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: {
          u_name: 'lolcat' + Math.floor(Math.random() * 100000),
          password: 'abc123',
          role: 'Mentee',
          f_name: 'Ben',
          l_name: 'Inada',
          email: 'me@beninada.com',
          dob: new Date()
        }
      })
    })
    .then(res => res.json())
    .then(user => {
      var updatedUsers = JSON.parse(this.state.users);
      updatedUsers.push(user);

      this.setState({ users: JSON.stringify(updatedUsers) })
    });
  }

  render() {
    return (
      <Container textAlign='left' style={{ marginTop: '7em' }}>
        <Container style={{ marginBottom: '1em' }}>
          {this.state.users}
        </Container>
        <Button onClick={this.addFakeUser}>Add Fake User</Button>
      </Container>
    );
  }
}

export default UserViewer;
