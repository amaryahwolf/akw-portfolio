// Import react, useState and components
import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Portfolio from './pages/Portfolio'
import Projects from './Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Acknowledgments from './pages/Acknowledgments';
import Footer from './Footer';

const styles = {
  font: {
    fontFamily: "'Manrope', sans-serif"
  }
}

export default function PortfolioContainer() {
    // Create useState with currentPage variable and setCurrentPage function
    const [currentPage, setCurrentPage] = useState('About');

    // Use conditional logic to render components
    const renderPage = () => {
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Projects') {
          return <Portfolio />;
        }
        if (currentPage === 'Resume') {
          return <Resume />;
        }
        if (currentPage === 'Acknowledgments') {
          return <Acknowledgments />;
        }
        return <Contact />;
      };

    // Create function to handle page change
    const handlePageChange = (page) => setCurrentPage(page);

    // Return a component to Navigation with useState variable and function, and call renderPage function
    return (
    <div style={styles.font}>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />  
      {renderPage()}
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
    )

};