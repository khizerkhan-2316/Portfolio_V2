import HeroSection from '../Views/HeroSection/HeroSection';
import AboutMe from '../Views/AboutMeSection/AboutMe';
import ProjectSection from '../Views/ProjectSection/ProjectSection';
import SkillsSection from '../Views/SkillsSection/SkillsSection';
import ExperinceSection from '../Views/ExperinceSection/ExperinceSection';
import ContactSection from '../Views/ContactSection/ContactSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <ProjectSection />
      <SkillsSection />
      <ExperinceSection/>
      <ContactSection />
    </>
  );
};

export default HomePage;
