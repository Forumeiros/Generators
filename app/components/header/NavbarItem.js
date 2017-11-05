import React from 'react';

export default class NavbarItem extends React.Component {
  render () {
    return (
      <li className="navbar-item">
        <a href={this.props.href}>{this.props.name}</a>
      </li>
    );
  }
}
