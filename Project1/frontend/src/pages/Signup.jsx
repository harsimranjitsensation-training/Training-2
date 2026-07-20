import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../services/userService.js";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: 0,
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await addUser(formData);
      alert(res.data.message);
      navigate("/signin");
      
      setFormData({
        name: "",
        email: "",
        age: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register Page</h1>
      <input
        type="text"
        placeholder="Enter your name"
        name="name"
        onChange={handleChange}
      ></input>
      <br />
      <input
        type="number"
        placeholder="Enter your age"
        name="age"
        onChange={handleChange}
      ></input>
      <br />
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        onChange={handleChange}
      ></input>
      <br />
      <input
        type="password"
        placeholder="Enter your password"
        name="password"
        onChange={handleChange}
      ></input>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;
