import React from 'react';

export default function Resume() {
  return (
    <div className="container">
      <h3 className="text-center mt-5">Technical Skills</h3>
      {/* TODO: add blurb about favorite part of coding */}
      <div className="row justify-content-center mt-5">
        <div className="col-sm-4">
          <h6>Browser-Based Technologies</h6>
          <ul>
            <li>
              HTML
            </li>
            <li>
              CSS
            </li>
            <li>
              JavaScript
            </li>
            <li>
              jQuery
            </li>
            <li>
              Responsive Design
            </li>
            <li>
              Bootstrap
            </li>
            <li>
              Handlebars
            </li>
            <li>
              Local Storage, Session Storage
            </li>
            <li>
              React.js
            </li>
          </ul>
        </div>
        <div className="col-sm-4">
          <h6>Server-Side Development</h6>
          <ul>
            <li>
              Node.js
            </li>
            <li>
              Express
            </li>
            <li>
              User Authentication
            </li>
            <li>
              Progressive Web Applications
            </li>
            <li>
              MERN Stack
            </li>
          </ul>
        </div>
        <div className="col-sm-4">
          <h6>API Interaction</h6>
          <ul>
            <li>
              API
            </li>
            <li>
              JSON
            </li>
            <li>
              AJAX
            </li>
          </ul>
        </div>
        <div className="col-sm-4 mt-4">
          <h6>Databases</h6>
          <ul>
            <li>
              MySQL
            </li>
            <li>
              MongoDB
            </li>
          </ul>
        </div>
        <div className="col-sm-4 mt-4">
          <h6>Deployment/CL Fundamentals</h6>
          <ul>
            <li>
              Git
            </li>
            <li>
              Heroku
            </li>
            <li>
              Github Pages
            </li>
          </ul>
        </div>
        <div className="col-sm-4 mt-4">
          <h6>Computer Science</h6>
          <ul>
            <li>
              Algorithms (Searches, Sorts)
            </li>
            <li>
              Efficiency
            </li>
            <li>
              Time Complexity
            </li>
            <li>
              Big O Notation
            </li>
            <li>
              Data Structures
            </li>
          </ul>
        </div>
      </div>
      <h4 className="text-center mt-5"><a href="https://docs.google.com/document/d/1-A6arbukBKoKJ_yGf6pPbeJkxxXGFr2BObC0_WwnNiE/export?format=pdf">Download Resume</a></h4>
    </div>
  );
}