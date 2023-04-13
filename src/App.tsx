import React from "react";
import "./App.css";
import InfoForm from "./components/InfoForm";
import { Container, Navbar, Row } from "react-bootstrap";
import { CustomNavbar } from "./components/CustomNavbar";

function App() {
  return (
    <>
      <CustomNavbar />
      <Container fluid className="mt-5">
        <InfoForm />
      </Container>
    </>
  );
}

export default App;
