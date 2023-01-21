import React from 'react';
import './component/navbar.scss'

function Navbar() {
    return (
    <header>
        <div className="Navbar">
            <div className="NavLog">
                <h1 className='NavHello'>Hello,</h1>
                <h1 className='NavName'>my name Vero</h1>
            </div>
            <nav className="NavRoutes">
                <a href="/#">Home</a>
                <a href="/#">About</a>
                <a href="/#">Experience</a>
                <a href="/#">Certificate</a>
                <a href="/#">Skills</a>
            </nav>
        </div>
    </header>
    )
  }
  
  export default Navbar