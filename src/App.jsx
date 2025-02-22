import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Resume from "./components/Resume";
import About from "./page/About";
import ContactForm from "./page/ContactForm";
import Home from "./page/Home";
import Project from "./page/Project";
import Skills from "./page/Skills";
import Service from "./page/Service";

function App() {
  return (
    <Router>
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/services" element={<Service />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
