import React, { Component } from 'react';

import ExperiencePageTitleSection from './subsection/ExperiencePageTitleSection';
import ExperienceListSection from './subsection/ExperienceListSection';

class ExperienceSection extends Component {
  render() {
    return (
      <div>
        <ExperiencePageTitleSection/>
        <ExperienceListSection/>

        <br/><br/>
      </div>
    );
  }
}

export default ExperienceSection;