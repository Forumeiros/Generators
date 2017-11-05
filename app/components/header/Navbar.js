import React from 'react';

import NavbarItem from './NavbarItem.js';

export default class Navbar extends React.Component {
  render () {
    let links = [{
      name: 'Voltar ao Fórum',
      href: 'http://ajuda.forumeiros.com/',
      icon: 'fa fa-angle-left'
    }];

    links = links.map((item, index) => {
      return (
        <NavbarItem
          key={index}
          name={item.name}
          icon={item.icon}
          href={item.href}
        />
      );
    });

    return (
      <nav className="navbar-wrapper">
        <ul className="navbar-inner">
          {links}
        </ul>
      </nav>
    );
  }
}
