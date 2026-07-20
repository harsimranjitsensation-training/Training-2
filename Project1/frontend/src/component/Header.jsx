import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
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
    </header>
  );
};

export default Header;
