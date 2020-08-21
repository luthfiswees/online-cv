import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
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
      this.checkViewportState("education-page-title-section", "education")
      this.checkViewportState("experience-page-title-section", "experience")
      this.checkViewportState("home-page-profile-section", "home")
    }, 200);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name});
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu inverted fixed="top" size="huge">
          <Menu.Item header>luthfiswees</Menu.Item>
          <Menu.Item
            href='https://github.com/luthfiswees/'
          >
            <Icon name='github'/>
          </Menu.Item>
          <Menu.Item
            href='https://www.linkedin.com/in/luthfiswees/'
          >
            <Icon name='linkedin'/>
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              as={Link}
              smooth
              to='/#home-page-profile-section'
            />

            <Menu.Item
              name='experience'
              active={activeItem === 'experience'}
              onClick={this.handleItemClick}
              as={Link}
              smooth
              to='/#experience-page-title-section'
            />

            <Menu.Item
              name='education'
              active={activeItem === 'education'}
              onClick={this.handleItemClick}
              as={Link}
              smooth
              to='/#education-page-title-section'
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default Header;