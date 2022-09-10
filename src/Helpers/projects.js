const projects = [
  {
    id: 1,
    image: '/Assets/Images/project_bilbasen.png',
    gif: '/Assets/GIF/Project-Bilbasen.gif',
    title: 'Reporting System',
    type: 'School Project',
    purpose: 'Learned to develop a role-based full-stack application',
    compatibility: 'The project is not in production',
    sourcecode_server:
      'https://github.com/khizerkhan-2316/Reportingsystem_server',
    sourcecode_client:
      'https://github.com/khizerkhan-2316/Reportingsystem_client',
    tags: ['Mongoose', 'Express', 'React', 'NodeJs'],
    description: [
      <p>
        Fullstack role and client/server arcitecture based web application with
        authentication and authorization. The server is implementet using NodeJs
        and Express, which interacts with mongodb no-sql database by using the
        framework Mongoose. The client-side is made in React as a single page
        application (SPA), which CRUD JSON data from the REST API.
      </p>,
      <p>
        There is admin and user role and the admin role has more user stories
        that can be realized. User role has only access to their own data to
        read.{' '}
      </p>,
      <p>
        As it was a school project for the company Bilbasen the project isn't in
        production, but you can see a glance of how the system works.
      </p>,
    ],
    date: 'May 2022',
    focusArea:
      'Client/Server, MERN-stack, REST API, Authentication, Authorization',
  },

  {
    id: 2,
    image: '/Assets/Images/project_countries.png',
    gif: '/Assets/GIF/REST-countries.gif',
    title: 'Countryinformation',
    type: 'Personal Project',
    purpose: 'Learned to extract data from API',
    compatibility: 'Works on all devieces',
    url: 'https://countryinfo-webapp.netlify.app/',
    sourcecode_client: 'https://github.com/khizerkhan-2316/rest_webapp',
    tags: ['React', 'API', 'JavaScript'],
    description: [
      <p>
        Client-side webapplication made in React. The purpose of this project
        was to learn working with API's and React. and display the extracted
        data client-side. I have used REST countries and MapBox API for this
        project.{' '}
      </p>,
      <p>
        The project displays all countries in the world and data related to the
        countries. You can search and filter on the countries and read more
        about each country in a seperate page.
      </p>,

      <p>
        Further more there is a option to toggle from and to dark and lightmode
        and that has been realized through CSS.
      </p>,
    ],

    date: 'December 2021',
    focusArea: 'Webapplication, SPA, React, API, JSON, Async JavaScript',
  },
];

export default projects;
