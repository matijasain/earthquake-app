import React from 'react';
import './Header.scss';

import logo from './img/seismic.png';

const Header = () => (
  <div className="ui inverted vertical center aligned segment">
    <div className="ui  text  container">
      <h1 className="ui inverted huge header">Earthquake App</h1>
      <img src={logo} alt="main earthquake logo" />
    </div>
  </div>
);

export default Header;
