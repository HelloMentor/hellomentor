import React, { Component } from 'react';
import { Container, Image, Menu } from 'semantic-ui-react'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image
              size='mini'
              src='images/logos/mountains.png'
              style={{ marginRight: '1.5em' }}
            />
            HelloMentor
          </Menu.Item>
          <Menu.Item as='a'>Home</Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default Header;