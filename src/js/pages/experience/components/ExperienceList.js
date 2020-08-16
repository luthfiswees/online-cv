import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";

class ExperienceList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Container text>
          <Header as="h2">{ this.props.title } - { this.props.company }</Header>
          <Header as="h3">{ this.props.yearOfService }</Header>

          <Header as="h4">Summary</Header>
          <p>
            { this.props.description.about }
          </p>
          <p>
            { this.props.description.general }
          </p>

            
          <Header as="h4">Job Description</Header>
          <ul>
            { 
              this.props.description.points.map(function(point) {
                return <li>{ point }</li>
              })
            }
          </ul>
          <br/><br/>
        </Container>
      </div>
    );
  }
}

export default ExperienceList;