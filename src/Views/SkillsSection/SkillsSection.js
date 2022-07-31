import './SkillsSection.css';
import Sphere from '../../Components/Sphere/Sphere';

const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-heading-container">
        <h2>My Skills</h2>
        <p>
          In this section you get a preview of my experince with languages and
          tools
        </p>
      </div>
      <div className="skills-content-container">
        <div className="skills-text-container">
          <h3>Languages</h3>
          <p>
            Jeg har lært HTML, CSS og Javascript på uddannelsen, således jeg kan
            anvende disse kompetencer til at skabe interaktive og præsentable
            hjemmesider på frontend.
          </p>

          <h3>Frameworks & Liberaris</h3>
          <p>
            Yderligere har jeg lært at udvikle hjemmesider vha. CMS-systemet
            Wordpress, hvor jeg anvendte Divi theme builder til at skabe
            hjemmesiderne. Dette var som freelance arbejde for Dantitet, et
            webbureau, der klarer opgaver indenfor grafisk design og
            webudvikling.
          </p>

          <h3>Tools</h3>
          <p>
            Yderligere har jeg lært at udvikle hjemmesider vha. CMS-systemet
            Wordpress, hvor jeg anvendte Divi theme builder til at skabe
            hjemmesiderne. Dette var som freelance arbejde for Dantitet, et
            webbureau, der klarer opgaver indenfor grafisk design og
            webudvikling.
          </p>
        </div>
        <div className="skills-sphere-container">
          <Sphere />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
