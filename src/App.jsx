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
import EnvAnim from "./components/anim/EnvAnim/EnvAnim";

function App() {
  const location = useLocation();

    console.log(location.pathname)
  return (
    <main>
      <Navbar />
      <section>
        <AnimatePresence exitBeforeEnter>
          <EnvAnim key={location.pathname} />
        </AnimatePresence>
        <div className="content-container">
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home location={location}/>} />
              <Route path="/about" element={<About location={location}/>} />
              <Route path="/work" element={<Work location={location}/>} />
              <Route path="/contact" element={<Contact location={location}/>} />
            </Routes>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

export default App;
