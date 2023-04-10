import React from "react";
import logo from "./logo.png";
import "./App.css";
import InfoForm from "./components/InfoForm";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <img src={logo} className="App-logo mb-5" alt="logo" />
          <InfoForm />
        </Container>
      </header>
    </div>
  );
}

export default App;
