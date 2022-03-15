import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const Navbar = () => {
  const navBarItemVariants = {
    extend: {
      padding: "2rem 0 2rem 0",
      // scale:2,
      transition: {
        // duration: 5,
      },
    },
  };

  return (
    <nav>
      <ul>
        <motion.li variants={navBarItemVariants} whileHover="extend">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to={"/"}>
            Home
          </NavLink>
        </motion.li>
        <motion.li variants={navBarItemVariants} whileHover="extend">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to={"/about"}>
            Me
          </NavLink>
        </motion.li>
        <motion.li variants={navBarItemVariants} whileHover="extend">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to={"/work"}>
            Work
          </NavLink>
        </motion.li>
        <motion.li variants={navBarItemVariants} whileHover="extend">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to={"/contact"}>
            Contact
          </NavLink>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Navbar;
