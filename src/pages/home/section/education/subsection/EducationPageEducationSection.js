import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import EducationCard from "../components/EducationCard";

import educationContent from './education-content.json';

class EducationPageEducationSection extends Component {
  render() {
   return (
     <div id="education-page-education-section">
       <Container style={{ width: '50rem', fontSize: '1.2rem' }}>
          <br/><br/>
          <h2>Education</h2>
          <br/>

          <Row>
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
          </Row>
          <br/><br/>
        </Container>
      </div>
   ); 
  }
}

export default EducationPageEducationSection;