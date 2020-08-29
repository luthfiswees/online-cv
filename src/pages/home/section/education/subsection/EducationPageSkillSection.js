import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import SkillCard from "../components/SkillCard";

import skillContent from "./skill-content.json"

class EducationPageSkillSection extends Component {

  getSkillCard(type) {
    return skillContent
      .contents
      .filter(function(content) {
        return content.type == type
      })
      .map(function(content) {
        return <SkillCard 
          name={content.name}
          description={content.description}
          iconLink={content.iconLink}
        />
      })
  }

  render() {
    return (
      <div id="education-page-skill-section">
        <Container style={{ width: '50rem', fontSize: '1.2rem' }}>
          <h2>Skill</h2>

          <p><i>
            Disclaimer: Icons presented here are properties of 
            <b><a href="https://icons8.com/"> icons8</a></b>.
          </i></p>
          <br/>

          <h3>Programming Language</h3>
          <br/>
          <Row>
            { this.getSkillCard("programming") }
          </Row>
          <br/>

          <h3>Technologies</h3>
          <Row>
            { this.getSkillCard("technologies") }
          </Row>
          <br/>

          <h3>Others</h3>
          <Row>
            { this.getSkillCard("other") }
          </Row>
            <br/>
        </Container>
      </div>
    );
  }
}

export default EducationPageSkillSection;