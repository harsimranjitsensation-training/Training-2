import React, { useState , useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllUsers } from "../services/userService";

function EditForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: 0,
    password: "",
  });
  const [user, setUser] = useState("");

  async function fetchUser() {
    try {
      const res = await getAllUsers();
      const user = res.data.users.find((u) => u._id === id);
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function update(e) {
    e.preventDefault();

    try {
      const res = await editUser(id, formData);
      alert(res.data.message);
      navigate("/");

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

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <form onSubmit={update}>
        <h1>Edit User</h1>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={user.name}
          onChange={handleChange}
        ></input>
        <br />
        <input
          type="number"
          placeholder="Enter your age"
          name="age"
          value={user.age}
          onChange={handleChange}
        ></input>
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={user.email}
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
