import React from 'react';

export default function Resume() {
    return (
    <div className='row justify-content-center mt-5'>
    <div className="col-sm-4">   
    <h1 className="text-center">Resume</h1>
    <h2>Technical Skills and Proficiencies</h2>
    {/* TODO: add blurb about favorite part of coding */}
    <ul className="list-unstyled">
      <li>
        HTML, CSS
      </li>
      <li>
        JavaScript
      </li>
      <li>
        jQuery, Bootstrap
      </li>
      <li>
        Web, Serverside and Third-Party APIs
      </li>
      <li>
        Node.js, Express.js, Jest
      </li>
      <li>
        Object-Oriented Programming
      </li>
      <li>
        SQL, MySQL, Sequelize
      </li>
      <li>
        Handlebars
      </li>
      <li>
        Model-View-Controller Framework
      </li>
      <li>
        Object-Relational Mapping
      </li>
      <li>
        NoSQL, MongoDB, Mongoose
      </li>
      <li>
        React
      </li>
      <li>
        Progressive Web Apps
      </li>
      <li>
        Agile Methodology
      </li>
      <li>
        Git, Heroku
      </li>
    </ul>
    <h3 className="text-center"><a href="https://docs.google.com/document/d/1-A6arbukBKoKJ_yGf6pPbeJkxxXGFr2BObC0_WwnNiE/export?format=pdf">Download Resume</a></h3>
    </div>
    </div>
    );
  }