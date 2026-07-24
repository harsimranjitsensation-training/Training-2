import React, { useState } from "react";
import { loginUser } from "../services/userService";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const Signin = () => {
  const { storeUser } = useAuth();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const LottieComponent = Lottie.default || Lottie;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await loginUser(formData);
      storeUser(res.data.user);
      alert(res.data.message);
      navigate("/");

      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>{/* <LottieComponent animationData={robot} loop={true} /> */}</div>
      <div>
        <form className="signin" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Enter your mail"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <button type="submit" >
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Signin;
