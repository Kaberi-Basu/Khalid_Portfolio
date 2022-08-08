import React from 'react';
import Button from '@mui/material/Button';
import './style.scss';

class Header extends React.Component {
  render() {
    return (
      <nav className="row mainHeader">
        <Button> Home </Button>
        <Button> About </Button>
        <Button> Services </Button>
        <Button onClick={() => document.getElementById('footer').scrollIntoView()}> Contact </Button>
      </nav>
    )
  }
}

export default Header;