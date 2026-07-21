import React, { useEffect, useState } from "react";
import { getAllUsers } from "../services/userService";

const Home = () => {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const res = await getAllUsers();
      setUsers(res.data.users);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <table border="2">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
