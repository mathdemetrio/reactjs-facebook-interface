import React, { Component } from 'react';

import logo from '../assets/logo.png';

class Header extends Component {
  state = {

  };
  
  render() {
    return (
      <header id="header">
        <div className="container">
          <div className="logo">
            <img alt="Logo Facebook" src={logo} />
          </div>
          <div className="user">Meu perfil</div>
        </div>
      </header>
    );
  }
}

export default Header;
