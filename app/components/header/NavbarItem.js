import React from 'react';

export default class NavbarItem extends React.Component {
  render () {
    return (
      <li className="navbar-item">
        <a href={this.props.href}>
          <i className={this.props.icon}></i> {this.props.name}
        </a>
      </li>
    );
  }
}
