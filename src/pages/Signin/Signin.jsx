import React from "react";
import { useState } from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FloatingLabel,
  FormControl,
} from "react-bootstrap";
import "../../style/style.css";
import CarBg from "../../aset/carbg.png";
import Greybox from "../../aset/greybox.png";
import useLogin from "../../containers/Login/hooks/useLogin";
function Signin() {
  const { formValue, setFormValue, handleSubmit, loading, errors } = useLogin();

  // const [values, setValues] = useState({
  //   name: "",
  //   password: "",
  // });

  // function handleChange(e) {
  //   setFormValue({ ...formValue });
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setErrors(validation(values));
  // }

  return (
    <section className="vh-100 overflow-hidden d-flex flex-row">
      <div>
        <img className="bg1" src={CarBg} alt="" />
      </div>
      <div className="d-flex align-items-center" style={{ width: "15%" }}>
        <div className="form">
          <img className="" src={Greybox} alt="" />
          <h3>Welcome, Admin BCR</h3>

          {errors.email && (
            <p style={{ color: "red", fontSize: "13px" }}>{errors.email}</p>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={formValue.email}
                onChange={(e) => {
                  setFormValue({ ...formValue, email: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={formValue.password}
                onChange={(e) => {
                  setFormValue({ ...formValue, password: e.target.value });
                }}
              />
              {errors.password && (
                <p style={{ color: "red", fontSize: "13px" }}>
                  {errors.password}
                </p>
              )}
            </Form.Group>
            <Button
              style={{ width: "24rem", backgroundColor: "#0D28A6" }}
              variant="primary"
              size="md"
              type="submit"
            >
              Sign In
            </Button>{" "}
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Signin;
