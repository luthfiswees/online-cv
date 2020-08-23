import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

class Disclaimer extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Disclaimer;