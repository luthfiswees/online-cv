import React, { Component } from 'react';
import { Container, Icon, Label } from 'semantic-ui-react';

class Disclaimer extends Component {
  render() {
    return (
      <div>
        <Container style={{ 
          position: 'fixed', 
          left: '85%',
          bottom: '3%',
          width: '18%'
        }}>
          <Label>
            <Icon name='react' /> Made using semantic-ui-react
          </Label>
        </Container>
      </div>
    );
  }
}

export default Disclaimer;