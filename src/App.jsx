import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import ScrollToTop from './components/ScrollToTop';

const PortfolioHome = () => (
  <main>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Education />
    <Certifications />
    <Achievements />
    <Contact />
  </main>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-gray-950 min-h-screen font-sans selection:bg-blue-500/30">
        <Navbar />
        <Routes>
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
