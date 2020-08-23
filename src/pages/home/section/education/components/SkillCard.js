import React, { Component } from "react";
import Card from 'react-bootstrap/Card';

class SkillCard extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Card style={{ width: '16rem' }}>
          <Card.Img 
            variant="left" 
            style={{ 
              padding: '1rem',  
              width: '12rem', 
              height: '12rem',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto'
            }} 
            src={ this.props.iconLink } 
          />
          <Card.Body>
            <Card.Title><b>{ this.props.name }</b></Card.Title>
            <Card.Text style={{ height: '4rem' }}>{ this.props.description }</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SkillCard;