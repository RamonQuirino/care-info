import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MainMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();



  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (

    <div>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.menuButton}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <PersonIcon />  Pacientes
        </MenuItem>
        <MenuItem onClick={handleClose}>Tabelas</MenuItem>
        <MenuItem onClick={handleClose}>Ajuda</MenuItem>
      </Menu>
    </div>
  );
}