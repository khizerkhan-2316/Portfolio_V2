import './WorkExperince.css';
const WorkExperince = (props) => {
  const { company, title, description, startDate, endDate, image } =
    props.experince;
  return (
    <section className="work-experince">
      <div className="company-logo">
        <img src={image} alt="teknologisk-institut" />
      </div>
      <div className="work-experince-content">
        <h4>{title}</h4>
        <h3>{company}</h3>
        <div className="work-experince-description">
          <p>{description}</p>
        </div>
        <h4>
          {startDate && endDate
            ? `${startDate} - ${endDate}`
            : `${startDate} - Now`}
        </h4>
      </div>
    </section>
  );
};

export default WorkExperince;
