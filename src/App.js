import './App.css';
import Navbar from './components/Navbar/Navbar';
import SectionWrapper from './components/SectionWrapper';
import MainSection from './section/MainSection/MainSection';
import AboutSection from './section/AboutSection/AboutSection';
import ProjectSection from './section/ProjectSection/ProjectSection';
import ContactSection from './section/ContactSection/ContactSection';
import Sidebar from './components/Sidebar/Sidebar';
import TopButton from './components/TopButton';
import SkillSection from './section/SkillSection/SkillSection';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <TopButton />
          <MainSection />
        <SectionWrapper id="about">
          <AboutSection />
        </SectionWrapper>
        <SectionWrapper id="skills">
          <SkillSection />
        </SectionWrapper>
        <SectionWrapper id="projects">
          <ProjectSection />
        </SectionWrapper>
        <SectionWrapper id="contact">
          <ContactSection />
        </SectionWrapper>
        
    </div>
  );
}

export default App;