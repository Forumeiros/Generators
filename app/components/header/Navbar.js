import React from 'react';

import NavbarItem from './NavbarItem.js';

export default class Navbar extends React.Component {
  render () {
    let links = [{
      name: 'Voltar ao Fórum',
      href: 'http://ajuda.forumeiros.com/'
    }];

    links = links.map((item, index) => {
      return (
        <NavbarItem
          key={index}
          name={item.name}
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
