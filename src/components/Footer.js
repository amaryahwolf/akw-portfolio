// Import react
import React from 'react';

function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <ul className="d-flex nav col-md-4 justify-content-end list-unstyled">
            <li className="ms-3">
                <a
                    href="https://www.linkedin.com/in/amaryah-wolf" className="">
                    {/* TODO: add linkedin icon */}
                    linkedin    
                </a>
            </li>
            <li className="ms-3">
                <a
                    href="https://github.com/amaryahwolf" className="">
                    {/* TODO: add github icon */}
                    github    
                </a>
            </li>
            {/* TODO: add third platform */}
        </ul>
        </footer>
    )
};

export default Footer;