const projects = [
  {
    id: 1,
    image: '/Assets/Images/project_bilbasen.png',
    gif: '/Assets/GIF/Zalando_Clone.gif',
    title: 'Reporting System',
    type: 'School Project',
    purpose: 'Learned to develop a role-based full-stack application',
    compatibility: 'Works on desktop only',
    url: 'https://reporting-system.netlify.app/user-login',
    sourcecode: 'https://github.com/khizerkhan-2316/Reportingsystem_server',
    tags: ['Mongoose', 'Express', 'React', 'NodeJs'],
    description: [
      <p>
        Fullstack web app med enkelt godkendelse. Backend er implementeret med
        PHP, der kommunikerer med en MySQL-database. Backend står for en JSON
        API med posts og brugere. Frontenden er lavet i React som Single Page
        App, der henter JSON fra backend JSON API.
      </p>,
      <p>
        Man kan enten være admin eller almindelig brugere. Admin har flere
        muligheder.
      </p>,
    ],
    adminAccess: [
      <p className="project-userdetails">Username: guest@live.dk</p>,
      <p>Password: admin123</p>,
    ],
    date: 'December 2021',
    focusArea: 'Webapplication, SPA, React, API, JSON, Async JavaScript',
  },

  {
    id: 2,
    image: '/Assets/Images/project_countries.png',
    gif: '/Assets/GIF/Zalando_Clone.gif',
    title: 'Countryinformation',
    type: 'Personal Project',
    purpose: 'Learned to extract data from API',
    compatibility: 'Works on all devieces',
    url: 'https://countryinfo-webapp.netlify.app/',
    sourcecode: 'https://github.com/khizerkhan-2316/rest_webapp',
    tags: ['React', 'API', 'JavaScript'],
    description: [
      <p>
        Fullstack web app med enkelt godkendelse. Backend er implementeret med
        PHP, der kommunikerer med en MySQL-database. Backend står for en JSON
        API med posts og brugere. Frontenden er lavet i React som Single Page
        App, der henter JSON fra backend JSON API.
      </p>,
      <p>
        Man kan enten være admin eller almindelig brugere. Admin har flere
        muligheder.
      </p>,
    ],
    adminAccess: [
      <p className="project-userdetails">Username: guest@live.dk</p>,
      <p>Password: admin123</p>,
    ],
    date: 'December 2021',
    focusArea: 'Webapplication, SPA, React, API, JSON, Async JavaScript',
  },
];

export default projects;
