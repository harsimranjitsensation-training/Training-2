import axios from "axios";

export const addUser = async (userData) => {
  try {
    return await axios.post("http://localhost:5000/users", userData);
    console.log(userData);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    return await axios.post("http://localhost:5000/users/login", userData);
    console.log(userData);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    return await axios.get("http://localhost:5000/users");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`http://localhost:5000/users/${id}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const editUser = async (id, userData) => {
  try {
    return await axios.put(`http://localhost:5000/users/${id}` , userData);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const logoutUser = async (userData) => {
  try {
    return await axios.post("http://localhost:5000/users/logout", userData);
    console.log(userData);
  } catch (error) {
    console.log(error);
    throw error;
  }
};