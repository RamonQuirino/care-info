import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';

const links = [
  { route: "/", label: "Home" },
  { route: "/about", label: "Sobre" },
  { route: "/blog", label: "Blog" },
  { route: "/contact", label: "Contato" },
];

export class Menu extends Component {

  renderLink = () => {
    return links.map((link, index) =>
      <Link to={link.route} key={index}>
        <MenuItem key={index}>{link.label}</MenuItem>
      </Link>
    )
  }

  render() {
    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true">
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          keepMounted>
          {this.renderLink()}
        </Menu>
      </div>

    )
  }
};

export default Menu;