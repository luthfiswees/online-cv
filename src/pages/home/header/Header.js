import React, { Component } from 'react';
//import { Icon, Menu } from 'semantic-ui-react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Grid from '@material-ui/core/Grid';
import { HashLink as Link } from 'react-router-hash-link';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.elementIsInViewport = this.elementIsInViewport.bind(this);
    this.checkViewportState = this.checkViewportState.bind(this);
    this.checkToolbarState = this.checkToolbarState.bind(this);

    this.state = {
      activeItem: 'profile',
      hideToolbar: false
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
    this.checkToolbarState();
  }

  checkToolbarState() {
    (window.innerWidth <= 1000) ? this.setState({ hideToolbar: true }) : this.setState({ hideToolbar: false })
  }

  componentDidMount() {
    setInterval(() => {
      this.checkViewportState("education-page-title-section", "education")
      this.checkViewportState("experience-page-title-section", "experience")
      this.checkViewportState("home-page-profile-section", "profile")
    }, 200);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name});
  }

  render() {
    const { activeItem, hideToolbar } = this.state

    return (
      <div>
        <AppBar position="fixed" style={{ backgroundColor: 'black' }}>
          <Toolbar>
            <Grid container justify="space-between">
              <Grid item xs={2}>
                <Typography variant="h6">
                  luthfiswees
                </Typography>
              </Grid>

              <Grid item xs={1} style={{ float: 'left' }}>
                <IconButton color="inherit">
                  <Badge color="secondary">
                    <GitHubIcon/>
                  </Badge>
                </IconButton>
                <IconButton color="inherit">
                  <Badge color="secondary">
                    <LinkedInIcon/>
                  </Badge>
                </IconButton>
              </Grid>

              {/* <Grid item xs={1} style={{ float: 'right', textAlign: 'center' }}>
                  <Badge color="secondary">
                    <LinkedInIcon/>
                  </Badge>
              </Grid> */}
              
              <Grid item xs={6}/>
              
              <Grid item xs={1} hidden={ activeItem === 'profile' || hideToolbar } style={{ float: 'right', textAlign: 'center' }}>
                <Button color="inherit">
                  <Link style={{ color: 'inherit' }} smooth to="/#home-page-profile-section">Profile</Link>
                </Button>
              </Grid>

              <Grid item xs={1} hidden={ activeItem === 'experience' || hideToolbar } style={{ float: 'right', textAlign: 'center' }}>
                <Button color="inherit">
                  <Link style={{ color: 'inherit' }} smooth to="/#experience-page-title-section">Experience</Link>
                </Button>
              </Grid>

              <Grid item xs={1} hidden={ activeItem === 'education' || hideToolbar } style={{ float: 'right', textAlign: 'center' }}>
                <Button color="inherit">
                  <Link style={{ color: 'inherit' }} smooth to="/#education-page-title-section">Education</Link>
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        {/* <Menu inverted fixed="top" size="huge">
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
        </Menu> */}
      </div>
    )
  }
}

export default Header;