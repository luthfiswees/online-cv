import React, { Component } from 'react';

import Header from '../../header/Header';

import EducationPageTitleSection from './section/EducationPageTitleSection';
import EducationPageSkillSection from './section/EducationPageSkillSection';
import EducationPageEducationSection from './section/EducationPageEducationSection';

class EducationPage extends Component {
  render() {
    return (
      <div>
        <Header/>

        <EducationPageTitleSection/>
        <EducationPageSkillSection/>
        <EducationPageEducationSection/>

        <br/><br/>
      </div>
    );
  }
}

export default EducationPage;