import React from "react";
import "./App.css";
import { Container, ToastContainer } from "react-bootstrap";
import { CustomNavbar } from "./components/CustomNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";
import { Home } from "./screens/Home";
import { ProfileRegister } from "./screens/ProfileRegister";

function App() {
  return (
    <>
      <Router>
        {/* <CustomNavbar /> */}
        <Container fluid>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profileRegister" element={<ProfileRegister />} />
          </Routes>
        </Container>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
