import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react'
import './Signup.css';

class Signup extends Component {
  state = { }

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.signup = this.signup.bind(this);
  }

  componentDidMount() {
    // fetch('/users')
    //   .then(res => res.json())
    //   .then(users => {
    //     this.setState({ users: JSON.stringify(users) });
    //   });
    console.log(this.props.location.search);
  }

  signup() {
    fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: {
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
      // var updatedUsers = JSON.parse(this.state.users);
      // updatedUsers.push(user);
      //
      // this.setState({ users: JSON.stringify(updatedUsers) })
    });
  }

  render() {
    return (
      <Container textAlign='left' style={{ marginTop: '7em' }}>
        <Button onClick={this.signup}>SUBMIT</Button>
      </Container>
    );
  }
}

export default Signup;
