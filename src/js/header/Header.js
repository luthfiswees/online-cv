import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);

    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name});
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu inverted fixed="top" size="huge">
          <Menu.Item header>luthfiswees's CV</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              as={Link}
              to='/'
            />

            <Menu.Item
              name='experience'
              active={activeItem === 'experience'}
              onClick={this.handleItemClick}
              as={Link}
              to='/experience'
            />

            <Menu.Item
              name='education'
              active={activeItem === 'education'}
              onClick={this.handleItemClick}
              as={Link}
              to='/education'
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default Header;