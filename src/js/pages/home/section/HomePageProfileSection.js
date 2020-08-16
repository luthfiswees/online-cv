import React, { Component } from "react";
import { Container, Header, Image, Segment, Grid } from "semantic-ui-react";

class HomePageProfileSection extends Component {
  render() {
    return (
      <div id="home-page-profile-section">
        <Container text>
          <br/><br/>
          <Segment>
            <Grid columns={2} relaxed="very">
              <Grid.Column width={1}/>

              <Grid.Column width={5}>
                <br/><br/>
                <Image 
                  floated="center"
                  src="assets/profile/myphoto.jpg"
                  style={{ borderRadius: "50%" }}
                />
              </Grid.Column>

              <Grid.Column width={9}>
                <br/>
                <Header as="h1">Luthfi Kurnia Putra</Header>
                <Header as="h2">Software Engineer in Test</Header>

                <Header as="h4">A little thing about me</Header>
                <p>
                 An Experienced Software Engineer in Test. My personal interest are mainly on Quality Assurance Technology and Distributed Systems (that are related to QA Infrastructure).
                 I also had experience on managing small teams for small project as a Scrum Master.
                </p>
                <p>
                  Recently trying my luck on learning Cloud Platform related topics with AWS and GCP. I also like to spend my time learning front-end web technologies like React and Vue. 
                  If you had an opportunity related to this, please feel free to contact me.
                </p>

                <Header as="h5">Contacts</Header>
                <b>LinkedIn</b>
                <p><a href="https://www.linkedin.com/in/luthfiswees/">https://www.linkedin.com/in/luthfiswees/</a></p>
                <b>Github</b>
                <p><a href="https://github.com/luthfiswees/">https://github.com/luthfiswees/</a></p>
                <b>Email</b>
                <p><b><i>luthfiswees@gmail.com</i></b></p>

              </Grid.Column>

              <Grid.Column width={1}/>
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default HomePageProfileSection;