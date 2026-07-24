import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Header = () => {
  const { user } = useAuth();
  return (
    <header>
      <div className="logo">Logo</div>
      <nav>
        <div>
          <Link className="link" to="/">
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
        <span>Welcome , {user.name}</span>
      ) : (
        <div className="auth">
          <div>
            <Link className="link" to="/signin">
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
