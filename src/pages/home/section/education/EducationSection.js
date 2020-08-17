import React, { Component } from 'react';

import EducationPageTitleSection from './subsection/EducationPageTitleSection';
import EducationPageSkillSection from './subsection/EducationPageSkillSection';
import EducationPageEducationSection from './subsection/EducationPageEducationSection';

class EducationSection extends Component {
  render() {
    return (
      <div>
        <EducationPageTitleSection/>
        <EducationPageSkillSection/>
        <EducationPageEducationSection/>

        <br/><br/>
      </div>
    );
  }
}

export default EducationSection;