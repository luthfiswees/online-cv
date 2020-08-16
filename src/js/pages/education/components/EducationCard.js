import React, { Component } from "react";
import { Card } from "semantic-ui-react";

class EducationCard extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Content>
            <Card.Header>{ this.props.name }</Card.Header>
            <Card.Meta>{ this.props.degree }</Card.Meta>
            <Card.Description>{ this.props.year }. Majoring in { this.props.major }</Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default EducationCard;