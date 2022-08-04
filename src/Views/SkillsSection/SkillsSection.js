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
            I have learned Java and SQL, where i have experince of developing
            desktop applications with MVC arcitecture. I have been using JavaFX
            for UI and core Java combined with SQL for the backend.
          </p>

          <p>
            Further more i have learned JavaScript, HTML5 and CSS3 for
            developing websites and web applications.
          </p>

          <h3>Frameworks & Libraries</h3>
          <p>
            I have experince with MERN stack which consists of MongoDB
            (Mongoose), Express, React and Node, using these frameworks and
            libraries to develop client/server arcitecture-based webapplications
            where the client-side interacts with the server through a REST API.
          </p>

          <h3>Continous learning</h3>

          <p>
            I strive to learn and enhance my skills as there is always more to
            learn ie. continous learning and growth. It is a life long journey
            of learning, growing and striving to be better both professionally
            and personally.
          </p>

          <p>
            Personally for me, fundemental and core computer science and
            programming related concepts are more important to grasph and learn.
            Popular frameworks and libraries often comes and go but the
            essentiel and core concepts of IT is here to stay.
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
