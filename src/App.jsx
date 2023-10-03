import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HookuseContext } from "./components/HookuseContext";
import "./App.css";

//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HookuseContext>
        <h1>Hooks - React</h1>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </HookuseContext>
    </>
  );
}

export default App;
