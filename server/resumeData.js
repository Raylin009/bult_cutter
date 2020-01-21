/*
resumeData[
  catagory
]
 */

const resumeData = [
  {
    title: 'Intro',
    timeSt: null,
    timeEnd: null,
    content: [
      'Army Non-Commissioned Officer transitioning to Software Development. Experienced in React, NodeJS, and Restful API development.',
    ],
  },
  {
    title: 'Skills',
    timeSt: null,
    timeEnd: null,
    content: [
      {
        title: 'Languages',
        timeSt: null,
        timeEnd: null,
        content: [
          'TypeScript','JavaScript(ES6)','SQL','HTML5','CSS3','SASS',
        ],
      },
      {
        title: 'Libraries & Frameworks',
        timeSt: null,
        timeEnd: null,
        content: [
          'React','Redux','Node','Express','Jest','Enzyme','Mocha','Chai',
        ],
      },
      {
        title: 'Database',
        timeSt: null,
        timeEnd: null,
        content: [
          'PostgreSQL','MySQL',' MongoDB',
        ],
      },
      {
        title: 'Tools & Services',
        timeSt: null,
        timeEnd: null,
        content: [ 
          'AWS',' EC2',' AJAX/HTTP ',' RESTful API',' jQuery','Underscore','Docker','Loader IO','NGINX','Artillery','New Relic'
        ],
      },
    ],
  },
  {
    title: 'Educations',
    timeSt: null,
    timeEnd: null,
    content: [
      {
        title: 'Hack Reactor @ Galvanize',
        timeSt: '2019',
        timeEnd: '2019',
        content: [
          'Advanced Full-Stack Software Engineering Immersive Program',
        ],
      },
      {
        title: 'De Anza College',
        timeSt: '2017',
        timeEnd: '2018',
        content: [
          'Computer Aided Design and Drafting(Creo 4, SOLIDWORKS, AutoCAD)',
        ],
      },
    ],
  },
  {
    title: 'Projects',
    timeSt: null,
    timeEnd: null,
    content: [
      {
        title: 'Open Chair, restaurant reservation service',
        timeSt: null,
        timeEnd: null,
        content: [
          {
            title: 'Software Developer',
            timeSt: null,
            timeEnd: 'SEP 2019',
            content: [
              'Triple module service request capacity from 500 to 1500 requests per second by implementing NGINX load balancer across 6 AWS EC2 instances',
              'Reduced query time by migrating development level MySQL database to production level MongoDB',
              'Built RESTful API for image carousel module using Express',
              'Decreased query time by 80% through de-normalizing and re-indexing database',
              'Applied Agile methodology, led morning Scrum meetings, and conducted code reviews to track deliverable timeline',
              'Coordinated with team members and conducted code review to ensure module compatibility across service',
            ],
          },
        ],
      },
      {
        title: "Pristine, Man's fashion service",
        timeSt: null,
        timeEnd: null,
        content: [
          {
            title: 'Font End Developer',
            timeSt: null,
            timeEnd: 'JUL 2019',
            content: [
              'Executed all visual design stages from concept to implementation',
              'Built all modules using React, Express, Node, Bluma CSS framework, Google Map API, and deployed service on AWS EC2 instance',
              'Created user stories, wireframes, and user flow for web to effectively communicate interaction and design ideas',
              'Conducted user research and test design concepts through rapid prototyping',
            ],
          },
        ],
      },
      {
        title: 'GHRSEA Express, online shopping site',
        timeSt: null,
        timeEnd: null,
        content: [
          {
            tiile: 'Software Developer',
            timeSt: null,
            timeEnd: 'MAY 2019',
            content: [
              'Built React modules from scratch using Express in Node.js and deployed via AWS EC2',
              'Deployed proxy server using AWS EC2 via Docker container',
              'Improved Google page speed insight score by 300% through utilizing Webpack’s built-in minifier',
              'Designed and created user stories, wireframes, and feature requirements using UX design methodology',
              'Implemented unit tests with Jest & Enzyme with 71% code coverage',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Experience',
    timeSt: null,
    timeEnd: null,
    content: [
      {
        title: 'Project/Operations Manager - Information Operations',
        timeSt: 'JAN 2015',
        timeEnd: 'Present',
        content: [
          'Represented the organization as a unit liaison to corporate consumers and senior leaders',
          'Coordinated operational electronic warfare, cyber warfare, psychological operations and civil affairs assets and weapon systems',
          'Led a team of 13 people on remote assignments while coordinating logistical supplies with host organization',
        ],
      },
    ],
  },
];

module.exports = { resumeData };
