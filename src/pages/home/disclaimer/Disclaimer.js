import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

class Disclaimer extends Component {
  constructor(props){
    super(props);
    this.checkIfIsOnMobile = this.checkIfIsOnMobile.bind(this);

    this.state = {
      isOnMobile: false
    }
  }

  checkIfIsOnMobile() {
    return (document.documentElement.clientWidth < 1000);
  }

  componentDidMount() {
    setInterval(() => {
      (this.checkIfIsOnMobile()) ? this.setState({ isOnMobile: true }) : this.setState({ isOnMobile: false })
    }, 200);
  }

  render() {
    return (
      <div>
        { 
          (!this.state.isOnMobile) &&
            <Badge pill variant="dark" as={Container} style={{
              position: 'fixed', 
              left: '80%',
              bottom: '3%',
              width: '18%',
              padding: '1%',
              textAlign: 'center',
              fontSize: '100%'
            }}>
                <FontAwesomeIcon icon={faReact} color="white" size='1x'/> Made using react-bootstrap
            </Badge>
        }
      </div>
    );
  }
}

export default Disclaimer;