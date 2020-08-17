import React, { Component } from "react";

import ExperienceList from '../components/ExperienceList';

import experienceContent from './experience-content.json';

class ExperienceListSection extends Component {

  render() {
    let contents = experienceContent.contents.map(function (content){
      return <ExperienceList 
        title={content.titleName}
        company={content.companyName}
        yearOfService={content.yearOfService}
        description={content.description}
      />
    });

    return (
      <div id="experience-list-section">
        { contents }
      </div>
    );
  }
}

export default ExperienceListSection;