import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Work from "./routes/Work/Work";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import EnvAnims from "./components/anim/EnvAnims/EnvAnims";
import { MyProvider } from "./components/Context/Context";
import Background from "./components/Background/Background";

function App() {
  const location = useLocation();

  return (
    <MyProvider>
      {/* <AnimatePresence exitBeforeEnter> */}
      <main
          // Hide scrollbar for 8 seconds
          // key={location.pathname}
          // animate={{ overflowY: "visible", transition: { delay: 8 } }}
          // exit={{ overflowY: "hidden" }}
        >
          <Background />
          <Navbar />
          <section>
            <AnimatePresence exitBeforeEnter>
              <EnvAnims key={location.pathname} />
            </AnimatePresence>

            <motion.div
              className="content-container"
              animate={
                location.pathname !== "/"
                  ? { y: "-10rem", transition: { delay: 2.3 } }
                  : ""
              }
              exit={{ transition: { duration: 1 } }}
            >
              <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/work" element={<Work />} />
                </Routes>
              </AnimatePresence>
            </motion.div>
          </section>
        </main>
      {/* </AnimatePresence> */}
       
    </MyProvider>
  );
}

export default App;
