import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class HomePageProfileSection extends Component {
  render() {
    return (
      <div id="home-page-profile-section">
        <Container style={{ padding: '1rem' }}>
          <Jumbotron as={Container} style={{
            position: 'grid',
            width: '65rem', 
            height: '43rem',
            borderRadius: '2rem',
            fontSize: '1rem' 
          }}>
            <Row>
              <Col xs={4}>
                <br/>
                <Image style={{ padding: '2rem'}} src="assets/profile/myphoto.jpg" roundedCircle fluid />
                <br/><br/>

                <h5><b>Contact</b></h5>
                <b>Email</b>
                <p><i>luthfiswees@gmail.com</i></p>

                <h5><b>Location</b></h5>
                <p><i>Greater Jakarta Area, Indonesia</i></p>
              </Col>

              <Col xs={8}>
                <br/>
                <h3><b>Luthfi Kurnia Putra</b></h3>
                <h3>Software Engineer in Test</h3>
                <br/>
                <h4><b>A little thing about me</b></h4>
                <p>
                 An Experienced Software Engineer in Test. My personal interest are mainly on Quality Assurance Technology and Distributed Systems (that are related to QA Infrastructure).
                 I also had experience on managing small teams for small project as a Scrum Master.
                </p>
                <p>
                  Recently trying my luck on learning Cloud Platform related topics with AWS and GCP. I also like to spend my time learning front-end web technologies like React and Vue. 
                  If you had an opportunity related to this, please feel free to contact me.
                </p>
                <br/>
                <h5><b>Public Page</b></h5>
                <b>LinkedIn</b>
                <p><a href="https://www.linkedin.com/in/luthfiswees/">https://www.linkedin.com/in/luthfiswees/</a></p>
                <b>Github</b>
                <p><a href="https://github.com/luthfiswees/">https://github.com/luthfiswees/</a></p>
              </Col>
            </Row>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default HomePageProfileSection;