import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FloatingLabel,
  FormControl,
} from "react-bootstrap";
import "./style/style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import validation from "./Validation";

function App() {
  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validation(values));
  }

  return (
    <section className="vh-100 overflow-hidden d-flex flex-row">
      <div>
        <img className="bg1" src={require("./aset/carbg.png")} alt="" />
      </div>
      <div className="d-flex align-items-center" style={{ width: "15%" }}>
        <div className="form">
          <img className="" src={require("./aset/greybox.png")} alt="" />
          <h3>Welcome, Admin BCR</h3>

          {errors.name && (
            <p style={{ color: "red", fontSize: "13px" }}>{errors.name}</p>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="name"
                placeholder="Enter email"
                value={values.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
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

export default App;
