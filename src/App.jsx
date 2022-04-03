import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Work from "./routes/Work/Work";
import Contact from "./routes/Contact/Contact";
import TopBarAnim from "./components/anim/TopBarAnim/TopBarAnim";
import { AnimatePresence } from "framer-motion";
import MidBarAnim from "./components/anim/MidBarAnim/MidBarAnim";

function App() {
  const location = useLocation();

  return (
    <main>
      <Navbar />
      <TopBarAnim />
      <section>
        <AnimatePresence>
          <div className="content-container">
            <MidBarAnim />
            <div className="content-container-wrapper">
              <Routes location={location} key={location.key}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </AnimatePresence>
      </section>
    </main>
  );
}

export default App;
