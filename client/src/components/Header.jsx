import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../interfaces/auth.interface";
import { logout, reset } from "../features/auth/authSlice";
import logo from "../assets/images/logo.png";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../assets/css/header.css";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => {
    return state.auth;
  });
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <Container fluid className="flex-row">
      <Row className="justify-content-between p-4">
        <div className="w-50">
          <Link to="/">
            <img src={logo} className="" width="40" height="40" alt="logo" />{" "}
            <span>ChuayCook</span>
          </Link>
        </div>
        {user ? (
          <button className="btn w-25" onClick={onLogout}>
            <FaSignOutAlt />
            Logout
          </button>
        ) : (
          <div className="d-flex w-auto">
            <Button className="btn me-1">
              <Link to="/login">
                <FaSignInAlt />
                Login
              </Link>
            </Button>
            <Button className="btn">
              <Link to="/register">
                <FaUser />
                Register
              </Link>
            </Button>
          </div>
        )}
      </Row>
    </Container>
  );
};
