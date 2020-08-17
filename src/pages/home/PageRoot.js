import React, { Component } from 'react';

import HomeSection from './section/home/HomeSection';
import ExperienceSection from './section/experience/ExperienceSection';
import EducationSection from './section/education/EducationSection';

import Header from "./header/Header";

class PageRoot extends Component {
  render() {
    return (
      <div>
        <Header/>

        <HomeSection/>
        <ExperienceSection/>
        <EducationSection/>

      </div>
    );
  }
}

export default PageRoot;