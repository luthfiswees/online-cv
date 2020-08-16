import React, { Component } from "react";
import { Card, Container, Header } from "semantic-ui-react";

import EducationCard from "../components/EducationCard";

import educationContent from './education-content.json';

class EducationPageEducationSection extends Component {
  render() {
   return (
     <div id="education-page-education-section">
       <Container text>
          <br/><br/>
          <Header as="h2">Education</Header>
          <br/>

          <Card.Group>
          {
            educationContent.contents.map(function(content) {
              return <EducationCard 
                name={content.name}
                degree={content.degree}
                major={content.major}
                year={content.year}
              />
            })
          }
          </Card.Group>
          <br/><br/>
        </Container>
      </div>
   ); 
  }
}

export default EducationPageEducationSection;