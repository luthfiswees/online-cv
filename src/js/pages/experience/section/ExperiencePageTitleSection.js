import React, { Component } from "react";

import { Container, Header } from "semantic-ui-react";

class ExperiencePageTitleSection extends Component {
  render() {
    return (
      <div id="experience-page-title-section">
        <Container textAlign="center">
          <br/><br/><br/>
          <Header as="h1">Experience</Header>
          <br/><br/>
        </Container>
      </div>
    );
  }
}

export default ExperiencePageTitleSection;