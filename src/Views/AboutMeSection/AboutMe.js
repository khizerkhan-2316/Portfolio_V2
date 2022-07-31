import './AboutMe.css';

const AboutMe = () => {
  const facts = [
    { title: 'Experince', value: '4 months' },
    { title: 'Projects', value: '5' },
    { title: 'Field', value: 'IT' },
    { title: 'Education', value: 'Compuer Science' },
  ];
  return (
    <>
      <section id="about" className="about">
        <div className="about-heading-container">
          <h2>About me</h2>
        </div>

        <div className="about-paragraph-container">
          <h3>Education</h3>
          <p>
            I am a happy and smiling boy of 23 years, who lives in Hasle,
            Aarhus. I traveled from Pakistan to Denmark as a 1-year-old and
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

        <div className="about-paragraph-container">
          <h3>Working way</h3>
          <p>
            My working method when it comes to tasks, whether it is educational
            or personal, I work systematically and purposefully and plan my work
            tasks, so I can form an overview and meet deadlines and complete the
            work tasks.
          </p>
          <p>
            In my spare time I spend a lot of my time programming. I self-study
            the programming language Java, where I use object-oriented
            programming style to code in. I learn theory online and put it into
            practice in console projects I build myself. As for anything else, I
            spend time with family and friends.
          </p>
        </div>
        <div className="about-facts-container">
          {facts.map((fact, index) => {
            return (
              <section className="about-fact" key={index}>
                <h3>{fact.title}</h3>
                <h4>{fact.value}</h4>
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AboutMe;
