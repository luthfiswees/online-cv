import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";

class SkillCard extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Content>
            <Image 
              floated="left"
              size="mini"
              src={ this.props.iconLink }
            />
            <Card.Header>{ this.props.name }</Card.Header>
            <Card.Meta>{ this.props.description }</Card.Meta>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default SkillCard;