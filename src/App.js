import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import Scrollup from "./components/scrollup/Scrollup";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import DeveloperInsights from "./components/Insights/DeveloperInsights"

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Qualification />
        <Skills />
        <Work />
        <DeveloperInsights />
        <Contact />

      </main>

      <Footer />
      <Scrollup />
      </>
  );

}

export default App;
