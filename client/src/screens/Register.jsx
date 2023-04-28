import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../interfaces/auth.interface";
import { Container, Row } from "react-bootstrap";
import heartPlus from "../assets/images/heartPlus.svg";
import { Link } from "react-router-dom";
import "../assets/css/register.css";

export const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    fisrtname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
    sex: "",
    role: "",
  });
  const { firstname, lastname, email, password, password2, sex, role } =
    formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: RootState) => {
      return state.auth;
    }
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // redirect when logged
    console.log(isSuccess, user);
    if ((isSuccess || user) && user != "undefined") {
      navigate("/profileRegister");
    }

    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        firstname,
        lastname,
        email,
        password,
        sex,
        role,
      };
      console.log(userData);
      dispatch(register(userData));
      <Link to={"/profileRegister"} />;
    }
  };
  return (
    <>
      <Container className="flex-column">
        <Row className="heading">
          <h3 className="text-center">ลงทะเบียนแอคเค้าท์ของคุณ</h3>
          <img src={heartPlus} alt="profile" />
          <p className="text-wrap text-center">
            กรุณาตรวจสอบและกรอกข้อมูลให้ถูกต้องครบถ้วน
          </p>
        </Row>
        <Row className="justify-content-center">
          <form onSubmit={onSubmit} className="form w-50">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                value={firstname}
                onChange={onChange}
                placeholder="Enter Your Firstname"
                required
              />
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastname"
                value={lastname}
                onChange={onChange}
                placeholder="Enter Your Lastname"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Enter Your email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="formcontrol w-100"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Enter Your password"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="formcontrol w-100"
                id="password2"
                name="password2"
                value={password2}
                onChange={onChange}
                placeholder="Confirm Your password"
                required
              />
            </div>
            <div className="form-group">
              <select
                className="form-control"
                id="sex"
                name="sex"
                value={sex}
                onChange={onChange}
                placeholder="Enter Your Role"
                required
              >
                <option value="">Please select your biological sex</option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
              </select>
            </div>
            <div className="form-group">
              <select
                className="form-control"
                id="role"
                name="role"
                value={role}
                onChange={onChange}
                placeholder="Enter Your Role"
                required
              >
                <option value="">Please select your role</option>
                <option value="user">User</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>
            <div className="form-group">
              <button className="btn btn-block">Next</button>
            </div>
          </form>
        </Row>
      </Container>
    </>
  );
};
