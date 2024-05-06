import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./Components/ErrorBoundary";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div className="app-container">
              <ErrorBoundary>
                <Navbar />
                <Home />
                <Footer />
              </ErrorBoundary>
            </div>
          </>
        }
      />

      <Route
        path="/about"
        element={
          <>
            <div className="other-container">
              <ErrorBoundary>
                <Navbar />
                <About />
                <Footer />
              </ErrorBoundary>
            </div>
          </>
        }
      />

      <Route
        path="/contact"
        element={
          <>
            <div className="other-container">
              <ErrorBoundary>
                <Navbar />
                <Contact />
                <Footer />
              </ErrorBoundary>
            </div>
          </>
        }
      />
    </Routes>
  );
}

export default App;
