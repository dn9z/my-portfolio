import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navBarItemVariants = {
  hidden: {
    y: "100vh",
  },
  show: {
    y: 0,
    transition:{
      // damping:1
      // stiffness:50
      type:'spring',
      stiffness:50,
      damping:10
    }
  },
};

const Navbar = () => {
  return (
    <nav>
      <motion.ul
        // variants={navBarItemVariants}
        transition={{ staggerChildren: 0.3 }}
        initial="hidden"
        animate="show"
      >
        <motion.li
          variants={navBarItemVariants}
          whileHover={{
            padding: "2rem 0 2rem 0",
            // scale:2,
            transition: {
              // duration: 5,
            },
          }}
        >
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to={"/"}
          >
            Home
          </NavLink>
        </motion.li>
        <motion.li
          variants={navBarItemVariants}
          whileHover={{
            padding: "2rem 0 2rem 0",
            // scale:2,
            transition: {
              // duration: 5,
            },
          }}
        >
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to={"/about"}
          >
            Me
          </NavLink>
        </motion.li>
        <motion.li
          variants={navBarItemVariants}
          whileHover={{
            padding: "2rem 0 2rem 0",
            // scale:2,
            transition: {
              // duration: 5,
            },
          }}
        >
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to={"/work"}
          >
            Work
          </NavLink>
        </motion.li>
        <motion.li
          variants={navBarItemVariants}
          whileHover={{
            padding: "2rem 0 2rem 0",
            // scale:2,
            transition: {
              // duration: 5,
            },
          }}
        >
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to={"/contact"}
          >
            Contact
          </NavLink>
        </motion.li>
      </motion.ul>
    </nav>
  );
};

export default Navbar;
