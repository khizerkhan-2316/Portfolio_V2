import './ExperinceSection.css';
import WorkExperince from '../../Components/WorkExperince/WorkExperince';
import { useExperinces } from '../../Context/ExperinceContext';
const ExperinceSection = () => {
  const experinces = useExperinces();

  return (
    <section id="experince">
      <div className="experince-heading-container">
        <h2>Explore my experince</h2>
        <p>
          Get a insight into my experince in terms of education and work in IT
        </p>
      </div>
      {experinces.map((experince, index) => {
        return <WorkExperince key={index} experince={experince} />;
      })}
    </section>
  );
};

export default ExperinceSection;
