import React, { Component } from 'react';
import { Image, Menu } from 'semantic-ui-react'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <Menu size='small'>
        <Menu.Item>
          <Image
            size='mini'
            src='images/logos/mountains.png'
          />
        </Menu.Item>
        <Menu.Item header>
          HelloMentor
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
