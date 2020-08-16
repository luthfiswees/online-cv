import React, { Component } from 'react';

import Header from '../../header/Header';

import HomePageProfileSection from './section/HomePageProfileSection';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header/>

        <HomePageProfileSection/>

        <br/><br/>
      </div>
    );
  }
}

export default HomePage;