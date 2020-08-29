import React, { Component } from "react";
import Card from 'react-bootstrap/Card';

class EducationCard extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Card style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title><b>{ this.props.name }</b></Card.Title>
            <Card.Text style={{ height: '6rem' }}>
              <b>{ this.props.degree }</b>
              <p>{ this.props.year }. Majoring in { this.props.major }</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default EducationCard;