import React from "react";
import "../components/header.css";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// import { useState } from "react";

const Header = () => {
  const logo =
    "https://raw.githubusercontent.com/barbarasagredo/SCL016-burger-queen/main/src/images/Queen%20Vee%20no-bg.png";

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="Navbar">
      <section className= "nameAndLogo">
        <img alt="Logo" src={logo} className="logo" />
        <h1>Burger Queen</h1>
      </section>

      <section>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Camarero
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>User 1</MenuItem>
          <MenuItem onClick={handleClose}>User 2</MenuItem>
          <MenuItem onClick={handleClose}>User 3</MenuItem>
        </Menu>
      </section>
    </Box>
  );
};

export default Header;
