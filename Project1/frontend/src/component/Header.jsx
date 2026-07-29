import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { logoutUser } from "../services/userService";
const Header = () => {
  const { user , setUser} = useAuth();

  async function logout(){
    try {
      await logoutUser();
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setUser(null);
      window.location.href = "/";
      
    }
    catch(error){
      console.log(error);
      throw error;
    }
  }

  return (
    <header>
      <div className="logo">Logo</div>
      <nav>
        <div>
          <Link className="link" to="/home">
            Home
          </Link>
        </div>
        <div>
          <Link className="link" to="/product">
            Product
          </Link>
        </div>
        <div>
          <Link className="link" to="/about">
            About
          </Link>
        </div>
        <div>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </div>
      </nav>

      {user ? (
        <span>
          Welcome , {user.name} <button onClick={logout}>Logout</button>
        </span>
      ) : (
        <div className="auth">
          <div>
            <Link className="link" to="/">
              signin
            </Link>
          </div>{" "}
          <div>
            <Link className="link" to="/signup">
              signup
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
