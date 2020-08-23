import React, { Component } from "react";
//import { Container, Header } from "semantic-ui-react";
import Container from 'react-bootstrap/Container';

class ExperienceList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Container style={{ width: '60rem' }}>
          <h2><b>{ this.props.title } - { this.props.company }</b></h2>
          <h5><b>{ this.props.yearOfService }</b></h5>
          <br/>

          <h4><b>Summary</b></h4>
          <p style={{ fontSize: '1.5rem' }}>
            { this.props.description.about }
          </p>
          <p style={{ fontSize: '1.5rem' }}>
            { this.props.description.general }
          </p>

            
          <h4><b>Job Description</b></h4>
          <ul>
            { 
              this.props.description.points.map(function(point) {
                return <li style={{ fontSize: '1.5rem' }}>{ point }</li>
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