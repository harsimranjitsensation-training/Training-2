import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditForm() {
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
  return (
    <>
      <form>
        <h1>Edit User</h1>
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

        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default EditForm;
