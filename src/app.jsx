import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom-v5-compat";
import Footer from "./components/footer/Footer.jsx";

export default function Home() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Footer />} />
        </Routes>
      </>
    </Router>
  );
}
