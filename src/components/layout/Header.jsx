import React from "react";
import { motion } from "framer-motion";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header({ isAuthenticated }) {
  return (
    <nav>
      <motion.div
        className="nav-first-div"
        initial={{ x: "-100%" }}
        whileInView={{ x: "0" }}
      >
        <IoFastFoodOutline /> Food<span>Expect</span>
      </motion.div>

      <div className="nav-middle-div">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
      </div>

      <div className="nav-last-div">
        <Link to="/cart">
          <FaCartShopping style={{ color: "black" }} />
        </Link>
        <Link to={isAuthenticated ? "/me" : "/login"}>
          {isAuthenticated ? (
            <FaUser />
          ) : (
            <button>
              Login <FiLogIn />
            </button>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Header;
