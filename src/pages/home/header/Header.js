import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.elementIsInViewport = this.elementIsInViewport.bind(this);
    this.checkViewportState = this.checkViewportState.bind(this);

    this.state = {
      activeItem: 'home'
    }
    
    this.style = {
      navbarContainer: {
        position: 'fixed'
      },
      iconContainer: {
        padding: '20%'
      }
    }
    this.route = {
      profileSection: 'home-page-title-section',
      experienceSection: 'experience-page-title-section',
      educationSection: 'education-page-title-section'
    }
  }

  elementIsInViewport(id) {
    const rect = document.getElementById(id).getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  checkViewportState(id, newState) {
    if (this.elementIsInViewport(id)) {
      this.setState({ activeItem: newState })
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.checkViewportState(this.route.educationSection, "education")
      this.checkViewportState(this.route.experienceSection, "experience")
      this.checkViewportState(this.route.profileSection, "home")
    }, 200);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name});
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Container fluid>
          <Navbar fixed="top" bg="dark" variant="dark">
            <Navbar.Brand><h3>luthfiswees</h3></Navbar.Brand>
            <Nav className="mr-auto">
              <div>
                <a href='https://github.com/luthfiswees/' target="_blank">
                  <Nav.Item>
                    <FontAwesomeIcon style={this.style.iconContainer} icon={faGithub} color="white" size="3x"/>
                  </Nav.Item>
                </a>
              </div>
              <div>
                <a href='https://www.linkedin.com/in/luthfiswees/' target="_blank">
                  <Nav.Item>
                    <FontAwesomeIcon style={this.style.iconContainer} icon={faLinkedin} color="white" size="3x"/>
                  </Nav.Item>
                </a>
              </div>
            </Nav>
            <Nav
              defaultActiveKey={ 'home' }
              activeKey={ activeItem }
            >
              <Nav.Link
                eventKey='home' 
                size="lg" 
                as={Link}
                smooth
                to={ '#' + this.route.profileSection }
              >
                <h5>Profile</h5>
              </Nav.Link>
              <Nav.Link
                eventKey='experience' 
                size="lg" 
                as={Link}
                smooth
                to={ '#' + this.route.experienceSection }
              >
                <h5>Experience</h5>
              </Nav.Link>
              <Nav.Link
                eventKey='education' 
                size="lg" 
                as={Link}
                smooth
                to={ '#' + this.route.educationSection }
              >
                <h5>Education</h5>
              </Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </div>
    )
  }
}

export default Header;