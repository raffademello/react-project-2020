import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Header, Segment, Container } from "semantic-ui-react";
import Routes from "./Routes";

function App() {
  return (
    <>
      <Segment className="p-5" vertical>
        <Container>
          <Header size="huge" className="mb-5">
            <Navbar />
          </Header>
          <Routes/>
        </Container>
      </Segment>
    </>
  );
}

export default App;
