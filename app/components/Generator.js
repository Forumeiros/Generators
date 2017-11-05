import React from 'react';

import Header from './header/Header.js';
import Body from './body/Body.js';

export default class Generator extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}
