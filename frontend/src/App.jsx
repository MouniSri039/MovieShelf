// main application file for MovieShelf

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shelf from "./pages/Shelf";

import { toggleTheme } from "./theme";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* main navigation bar */}
      <nav className="navbar">
        <Link to="/" className="logo">
          MovieShelf
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/shelf">My Shelf</Link>

          {/* dark mode button */}
          <button
            onClick={toggleTheme}
            className="theme-button"
            title="Toggle dark mode"
          >
            ◐
          </button>

          <Link to="/login">Login</Link>

          <Link to="/register" className="register-link">
            Get Started
          </Link>
        </div>
      </nav>

      {/* website pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shelf" element={<Shelf />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
