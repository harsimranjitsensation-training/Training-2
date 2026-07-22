import React, { useEffect, useState } from "react";
import { getAllUsers, deleteUser } from "../services/userService";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const res = await getAllUsers();
      setUsers(res.data.users);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteUsers(id) {
    try {
      await deleteUser(id);
      fetchUsers();
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
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                <span>
                  <button onClick={() => navigate(`/edit/${user._id}`)}>
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      deleteUsers(user._id);
                    }}
                  >
                    Delete
                  </button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
