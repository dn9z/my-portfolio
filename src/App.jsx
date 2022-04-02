import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Work from "./routes/Work/Work";
import Contact from "./routes/Contact/Contact";
import TopAnim from "./components/anim/TopAnim/TopAnim";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();

  return (
    <main>
      <Navbar />
      <TopAnim />
      <section>
        <div className="content-container">
          <AnimatePresence>
            <Routes location={location} key={location.key}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

export default App;
