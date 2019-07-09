import React from 'react';

import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

export default function MainMenu() {

  const links = [
    { route: "/", label: "Home" },
    { route: "/about", label: "Sobre" },
    { route: "/blog", label: "Blog" },
    { route: "/contact", label: "Contato" },
  ];

  function renderLink() {
    return links.map((link, index) =>
      <Link href={link.route} key={index} >
        <MenuItem>{link.label}</MenuItem>
      </Link>
    )
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClose() {
    setAnchorEl(null);
  }

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }


  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
        </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {renderLink()}
      </Menu>
    </div>
  )
}