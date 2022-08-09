import React from 'react';
import Button from '@mui/material/Button';
import './style.scss';

class Header extends React.Component {
  render() {
    return (
      <nav className="row mainHeader">
        <Button className="headerButton">
          Home
        </Button>
        <Button className="headerButton" onClick={() => document.getElementById('photographyhobby').scrollIntoView()}>
          Photography
        </Button>
        <Button className="headerButton" onClick={() => document.getElementById('martialArtsHobby').scrollIntoView()}>
          Martial Arts
        </Button>
        <Button className="headerButton" onClick={() => document.getElementById('footer').scrollIntoView()}>
          Contact
        </Button>
      </nav>
    )
  }
}

export default Header;