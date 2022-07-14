import './AboutMe.css';

const AboutMe = () => {
  const facts = [
    { title: 'Experince', value: '4 months' },
    { title: 'Projects', value: '5' },
    { title: 'Field', value: 'IT' },
    { title: 'Education', value: 'Compuer Science (AP)' },
  ];
  return (
    <>
      <section id="about" className="about">
        <div className="about-heading-container">
          <h2>About me</h2>
        </div>

        <div className="about-paragraph-container">
          <p>
            I am a happy and smiling boy of 21 years, who lives in Søndervangen
            by Viby J. I traveled from Pakistan to Denmark as a 1-year-old and
            started life in Denmark. I went to Tranbjergskolen (primary school).
            Subsequently, I started on the Higher Technical Exam (HTX) in the
            line Information Technology B and Mathematics A as I was interested
            in IT.
          </p>
          <p>
            I started the multimedia designer education in the year 2020 and am
            currently in the 2nd semester where I will soon start with the exam
            project. I chose this training in that it is a mixture of
            programming, design and communication, thus one learns all aspects
            related to the development of user interfaces.
          </p>
        </div>

        <div className="about-facts-container">
          {facts.map((fact) => {
            return (
              <div className="about-fact">
                <h3>{fact.value}</h3>
                <h4>{fact.title}</h4>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AboutMe;
