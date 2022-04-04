import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Work from "./routes/Work/Work";
import Contact from "./routes/Contact/Contact";
import { AnimatePresence } from "framer-motion";
import EnvAnim from "./components/anim/EnvAnim/EnvAnim";
import { MyProvider } from "./components/Context/Context";

function App() {
  const location = useLocation();

  return (
    <MyProvider>
      <main>
        <Navbar />
        <section>
          <AnimatePresence exitBeforeEnter>
            <EnvAnim key={location.pathname} />
          </AnimatePresence>
          <div className="content-container">
            <AnimatePresence exitBeforeEnter>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </div>
        </section>
      </main>
    </MyProvider>
  );
}

export default App;
