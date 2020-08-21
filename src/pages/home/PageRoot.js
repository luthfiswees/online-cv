import React, { Component } from 'react';

import HomeSection from './section/home/HomeSection';
import ExperienceSection from './section/experience/ExperienceSection';
import EducationSection from './section/education/EducationSection';

import Header from "./header/Header";
import Disclaimer from "./disclaimer/Disclaimer";

class PageRoot extends Component {
  render() {
    return (
      <div>
        <Header/>

        <HomeSection/>
        <ExperienceSection/>
        <EducationSection/>

        <Disclaimer/>
      </div>
    );
  }
}

export default PageRoot;