import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Destinations from "./components/Destinations";
// import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/destinations" element={<Destinations />} />
        </Routes>
        {/* <Hero /> */}
      </div>
    </Router>
  );
}

export default App;
