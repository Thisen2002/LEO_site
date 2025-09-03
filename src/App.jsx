import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Notfound from "./Pages/Notfound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Events from "./Pages/Events";
import Team from "./Pages/Team";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      
      <div className="App">
        <Navbar />
        <main style={{ minHeight: "calc(100vh - 140px)" }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Notfound />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
