// Import react
import React from 'react';

const styles = {
  header: {
      width: '100%',
      height: '60px'
  }
}

// Create function to render navigation bar
function Navigation({ currentPage, handlePageChange }) {
    return (
         <ul style={styles.header} className="nav justify-content-center align-items-center bg-light">
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                about
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
              >
                projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                resume
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                contact
              </a>
            </li> */}
        </ul>
    );
};

export default Navigation;