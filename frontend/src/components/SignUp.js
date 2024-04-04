import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
// import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const navigate = useNavigate();
  const handleAdd = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      navigate("/");
    }
  };

  return (
    <>
      <div className="container col-md-6  mt-5 border border-danger   bg-light text-dark">
        <h1> Register </h1>

        <div style={{ display: "flex", alignItems: "center" }}>
          <label className="mt-3 text-end" style={{ marginRight: "50px" }}>
            {" "}
            Name{" "}
          </label>

          <Form.Control
            type="text"
            placeholder="Enter the FullName"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <label className="mt-3" style={{ marginRight: "55px" }}>
            {" "}
            Email{" "}
          </label>

          <Form.Control
            type="text"
            placeholder="Enter the Email"
            className="mt-3"
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <label className="mt-3" style={{ marginRight: "30px" }}>
            {" "}
            Password{" "}
          </label>
          <Form.Control
            type="password"
            className="mt-3 mb-3"
            placeholder="Enter the Password "
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleAdd} className="btn btn-success btn-md m-5">
          {" "}
          Register{" "}
        </button>
      </div>
    </>
  );
};
export default SignUp;
