import React, { Component } from "react";
import { Card, Container, Header } from "semantic-ui-react";

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
        <Container text>
          <Header as="h2">Skill</Header>

          <p><i>
            Disclaimer: Icons presented here are properties of 
            <b><a href="https://icons8.com/"> icons8</a></b>.
          </i></p>
          <br/>

          <Container>
            <Header as="h3">Programming Language</Header>
            <br/>
            <Card.Group>
              { this.getSkillCard("programming") }
            </Card.Group>
            <br/>

            <Header as="h3">Technologies</Header>
            <Card.Group>
              { this.getSkillCard("technologies") }
            </Card.Group>
            <br/>

            <Header as="h3">Others</Header>
            <Card.Group>
              { this.getSkillCard("other") }
            </Card.Group>
            <br/>
          </Container>
        </Container>
      </div>
    );
  }
}

export default EducationPageSkillSection;