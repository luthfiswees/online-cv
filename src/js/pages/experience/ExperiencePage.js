import React, { Component } from 'react';

import Header from '../../header/Header';

import ExperiencePageTitleSection from './section/ExperiencePageTitleSection';
import ExperienceListSection from './section/ExperienceListSection';

class ExperiencePage extends Component {
  render() {
    return (
      <div>
        <Header/>

        <ExperiencePageTitleSection/>
        <ExperienceListSection/>

        <br/><br/>
      </div>
    );
  }
}

export default ExperiencePage;