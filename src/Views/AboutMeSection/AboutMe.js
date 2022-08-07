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
            line of Information Technology B-level and Mathematics A-level as I
            was interested in IT.
          </p>
          <p>
            I started Computer Science(AP) in the year 2021 and i am currently
            in the 4th semester where I am learning C# .NET, machine learning
            with TensorFlow and Swift. I chose this degree as i aspire to be a
            software developer.
          </p>
        </div>

        <div className="about-paragraph-container">
          <h3>Working way</h3>

          <p>
            The way I am as a person is that I am curious and inquisitive. I
            want to constantly develop myself, both personally and
            professionally, and on the basis of that I can become a better
            version of myself.
          </p>
          <p>
            My working method when it comes to tasks, whether it is educational
            or personal, I work systematically and purposefully and plan my work
            tasks, so I can form an overview and meet deadlines and complete the
            work tasks.
          </p>
          <p>
            I learn and grasph knowledge by implemententing it in projects to
            get a deeper and better understanding of how something works.
          </p>
        </div>

        <div className="about-paragraph-container">
          <h3>Work Experince</h3>
          <p>
            I am currently working as a student assistant at Schibsted in Media
            Sales department and furthermore working as a student developer at
            Danish Technological Institute as a student developer.
          </p>
        </div>

        <div className="about-paragraph-container">
          <h3>Ambitions</h3>
          <p>
            I have high ambitions regarding my education and carrer. I'm
            currently studying Computer Science(AP). Subsequently I will further
            my education by studying Bsc. Software Development. My vision for
            the future is to develop web applications.
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
