import React from 'react';
import Header from '../header';
import Content from '../content';
import Footer from '../footer-contact';
import './style.scss';

class MainPage extends React.Component {
  render() {
    return (
      <div className="container mainPage">
        <Header />
        <Content />
        <Footer />
      </div >
    )
  }
}

        export default MainPage;