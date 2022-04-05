import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Work from "./routes/Work/Work";
import Contact from "./routes/Contact/Contact";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import EnvAnims from "./components/anim/EnvAnims/EnvAnims";
import { MyProvider } from "./components/Context/Context";

function App() {
  const location = useLocation();

  return (
    <MyProvider>
      <main>
        <Navbar />
        <section>
          <AnimatePresence exitBeforeEnter>
            <EnvAnims key={location.pathname} />
          </AnimatePresence>
          <motion.div className="content-container"
            animate={location.pathname==='/about'?{y:'-7rem'}:''}
          >
            <AnimatePresence exitBeforeEnter>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </motion.div>
        </section>
      </main>
    </MyProvider>
  );
}

export default App;
