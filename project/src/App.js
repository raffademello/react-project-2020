import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Header, Segment, Container } from "semantic-ui-react";
import Routes from "./Routes";
import { HashRouter} from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Segment className="p-5" vertical>
          <Container>
            <Header size="huge" className="mb-5">
              <Navbar />
            </Header>
            <Routes />
          </Container>
        </Segment>
      </HashRouter>
    </>
  );
}

export default App;
