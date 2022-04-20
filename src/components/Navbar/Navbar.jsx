import { useState, useEffect } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import useWindowSize from "../customHooks/useWindowSize/useWindowSize";

const navBarItemVariants = {
  hidden: {
    y: "100vh",
  },
  show: {
    y: 0,
    transition: {
      // damping:1
      // stiffness:50
      type: "spring",
      stiffness: 50,
      damping: 10,
    },
  },
};

const Navbar = () => {
  const windowSize = useWindowSize();
  const [checkbox, setCheckbox] = useState(false);

  return (
    <>
      <input
        type="checkbox"
        id="chk"
        checked={checkbox}
        onChange={() => {
          setCheckbox(!checkbox);
        }}
      />
      <label htmlFor="chk" className="show-menu-btn">
        <div className="menu-btn-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
      </label>

      <nav>
        <motion.ul
          // variants={navBarItemVariants}
          transition={{ staggerChildren: 0.3 }}
          initial="hidden"
          animate="show"
        >
          <label htmlFor="chk" className="hide-menu-btn">
            <div className="menu-btn-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </label>
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
              onClick={() => {
                setCheckbox(false);
                console.log(checkbox);
              }}
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
              onClick={() => {
                setCheckbox(false);
                console.log(checkbox);
              }}
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
              onClick={() => {
                setCheckbox(false);
                console.log(checkbox);
              }}
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
              onClick={() => {
                setCheckbox(false);
                console.log(checkbox);
              }}
            >
              Contact
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
            <a
              href="https://github.com/dn9z"
              onClick={() => {
                setCheckbox(false);
                console.log(checkbox);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32px"
                height="32px"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
              </svg>
            </a>
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
            <a
              href="https://github.com/dn9z"
              onClick={() => {
                setCheckbox(false);
                console.log(checkbox);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32px"
                height="32px"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M27.26 27.271h-4.733v-7.427c0-1.771-0.037-4.047-2.475-4.047-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739v-15.271h4.552v2.083h0.061c0.636-1.203 2.183-2.468 4.491-2.468 4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912c-1.527 0-2.751-1.235-2.751-2.756 0-1.516 1.229-2.749 2.751-2.749s2.755 1.233 2.755 2.749c0 1.521-1.233 2.756-2.755 2.756zM9.489 27.271h-4.749v-15.271h4.749zM29.636 0h-27.276c-1.303 0-2.36 1.031-2.36 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307v-27.387c0-1.276-1.068-2.307-2.369-2.307z" />
              </svg>
            </a>
          </motion.li>
        </motion.ul>
      </nav>
    </>
  );
};

export default Navbar;
