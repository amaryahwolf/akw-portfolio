import React from 'react';

const projects = [
  {
    title: 'Garbage Fire',
    description: 'A full stack application to browse your favorite reality television shows and connect with other users using HTML, CSS, JS, Node, Express, Sequelize, and Handlebars.',
    img: 'garbage-fire.png',
    github: 'https://github.com/amaryahwolf/garbage-fire',
    deployed: 'https://garbage-fire.herokuapp.com/'
  },
  {
    title: 'Social-Network API',
    description: "A social network web application API where users can share their thoughts, react to friends' thoughts, and create a friends list using Express.js for routing, a MongoDB database, and the Mongoose ODM.",
    img: 'social-network-api.png',
    github: 'https://github.com/amaryahwolf/social-network-api',
    deployed: 'https://drive.google.com/file/d/1jtIVle4gqkv2R0cMKkKRtBv_M7JsMtN5/view'
  },
  {
    title: 'Weather Or Not',
    description: 'A weather dashboard to easily check the weather in any city around the world using the Open Weather API and dynamically powered by JavaScript.',
    img: 'weather-or-not.png',
    github: 'https://github.com/amaryahwolf/weather-dashboard',
    deployed: 'https://amaryahwolf.github.io/weather-dashboard/'
  },
  {
    title: 'README-Generator',
    description: 'A command-line tool to easily generate a README file for projects using Node.js.',
    img: 'readme-generator.png',
    github: 'https://github.com/amaryahwolf/readme-generator',
  },
  {
    title: 'Tech Talk',
    description: 'A CMS-style blog site for sharing tech-related musings built with Handlebars and a SQL backend.',
    img: 'tech-talk.png',
    github: 'https://github.com/amaryahwolf/tech-blog',
    deployed: 'https://akw-tech-talk.herokuapp.com/'
  },
  {
    title: 'Employee Tracker',
    description: "A content management system to manage a company's employee database, using Node.js, Inquirer, and MySQL.",
    img: 'employee-tracker.png',
    github: 'https://github.com/amaryahwolf/employee-tracker',
    deployed: 'https://drive.google.com/file/d/1WJxiPMeSTaFpVNFCK-rjiIzQ50bUPwyN/view?usp=share_link'
  },

]

export default function Projects() {
    return (
    <div className="container-fluid d-flex justify-content-center mt-5">
      {projects.map(() => (
        <div className="col-12 col-xl-6">
          <img src="{projects.img}">
          </img>
          <h4>
            <a href="{projects.deployed}">{projects.title}</a> 
            <a href="{projects.github}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a> <br/>
            {projects.description}
          </h4>
        </div>
      )
      )}
    </div>
    );
  }