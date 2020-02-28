import React, { Component } from "react";
import { Header, Segment, Container } from "semantic-ui-react";

class Home extends Component {
  render() {
    return (
      <>
        <Segment textAlign="center" style={{ padding: "1em 0em" }} vertical>
          <Header as="h1">Welcome</Header>
          <Header sub>Lorem ipsum dolor sit amet, consectetur</Header>
        </Segment>
      </>
    );
  }
}

export default Home;
