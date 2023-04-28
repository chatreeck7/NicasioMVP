import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../interfaces/auth.interface";
import "../assets/css/register.css";
import { Container, Row, Form, InputGroup } from "react-bootstrap";
import heartPlus from "../assets/images/heartPlus.svg";

export const ProfileRegister: React.FC = () => {
  const [formData, setFormData] = useState({
    symptom: "",
    level: "",
    height: "",
    weight: "",
    age: "",
    activeLevel: "",
  });
  const { symptom, level, height, weight, age, activeLevel } = formData;
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
    if ((isSuccess || user) && user != "undefined") {
      navigate("/");
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
    const userData = {
      symptom,
      level,
      height,
      weight,
      age,
      activeLevel,
    };
    console.log(userData)
    // dispatch(updateUser(userData));
  };

  return (
    <>
      <Container className="flex-column">
        <Row className="heading">
            <h3 className="text-center">แบ่งปันโปรไฟล์ของคุณกับเรา</h3>
            <img className="my-4" src={heartPlus} alt="profile" />
            <p className="text-wrap text-center">
              โปรดเลือกโรคที่คุณกำลังประสบอยู่ และ
              ข้อมูลบางส่วนเพื่อแบ่งปันกับเรา
            </p>
        </Row>

        <Form onSubmit={onSubmit} className="form w-50">
          <Form.Group controlId="symptom">
            <Form.Label>
              <p>โรค</p>
            </Form.Label>
            <Form.Select onChange={onChange} name="symptom">
              <option value="">None</option>
              <option value="diabete">โรคเบาหวาน</option>
              <option value="hypertension">โรคความดันโลหิตสูง</option>
              <option value="kidney">โรคไต</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="level">
            <Form.Label>
              <p>ระยะหรือชนิดของโรค</p>
            </Form.Label>
            <Form.Select aria-label="Default select" onChange={onChange} name="level">
              <option value="">None</option>
              <option value="type-1">โรคเบาหวานชนิดที่ 1</option>
              <option value="type-2">โรคเบาหวานชนิดที่ 2</option>
              <option value="while-preg">โรคเบาหวานขณะตั้งครรภ์</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="height">
            <Form.Label>ส่วนสูง</Form.Label>
            <br />
            <Form.Control
              type="text"
              placeholder="Height"
              onChange={onChange}
              name="height"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="weight">
            <Form.Label>น้ำหนัก</Form.Label>
            <br />
            <Form.Control
              type="text"
              placeholder="Weight"
              onChange={onChange}
              name="weight"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Age">
            <Form.Label>Age</Form.Label>
            <br />
            <Form.Control type="text" placeholder="Age" onChange={onChange} name="age"/>
          </Form.Group>
          <Form.Group controlId="level">
            <Form.Label>
              <p>คุณขยับเขยื้อนมากแค่ไหน ?</p>
            </Form.Label>
            <Form.Select aria-label="Default select" onChange={onChange} name="activeLevel">
              <option value="none">None</option>
              <option value="sedentary">ไม่ได้ออกกำลังกาย หรือน้อยมาก</option>
              <option value="lightly-active">1-3 วัน/สัปดาห์</option>
              <option value="moderately-active">3-5 วัน/สัปดาห์</option>
              <option value="very-active">6-7 วัน/สัปดาห์</option>
              <option value="extremely-active">
                เล่นกีฬาอย่างหนัก หรือเป็นนักกีฬา
              </option>
            </Form.Select>
          </Form.Group>
          <div className="form-group mb-5">
            <button className="btn btn-block">Submit</button>
          </div>
        </Form>
      </Container>
    </>
  );
};
