import { useState, useEffect } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import IntroBar from "./sections/IntroBar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import TechnologiesSection from "./sections/TechnologiesSection";
import ProjectsSection from "./sections/ProjectsSection";
import FooterSection from "./sections/FooterSection";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <>
      <Header toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <main>
        <IntroBar />
        <HeroSection darkMode={darkMode} />
        <AboutSection />
        <TechnologiesSection />
        <ProjectsSection />
      </main>
      <FooterSection />
    </>
  );
}
