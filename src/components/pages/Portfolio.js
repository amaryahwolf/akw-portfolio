import React from 'react';
import Projects from '../Projects'

export default function Portfolio() {
    const projects = [
        // TODO: update gif image functionality and resize images
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
        img: 'read-me-generator.png',
        github: 'https://github.com/amaryahwolf/readme-generator',
        deployed: 'https://drive.google.com/file/d/1WJxiPMeSTaFpVNFCK-rjiIzQ50bUPwyN/view?usp=share_link'
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
    ];
    return (
      <div>
        <Projects projects={projects} />
      </div>
    );
};