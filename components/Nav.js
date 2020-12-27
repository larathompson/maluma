import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return <>
    <section className="navbar">
      <div >
        <img className="nav-logo" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
      </div>
      {/* <div>
        <button> ENGLISH!</button>
        <button> GERMAN! </button>
      </div> */}
      <div className="nav-options">
        <Link to="/home" className="navbar-link">
        <h1>HOME</h1>
        </Link>
        <Link to="/about" className="navbar-link">
        <h1>ABOUT US</h1>
        </Link>
        <Link to="/process" className="navbar-link">
        <h1> PROCESS</h1>
        </Link>
        <Link to="/projects" className="navbar-link">
        <h1>PROJECTS</h1>
        </Link>
        <Link to="/faqs" className="navbar-link">
        <h1>FAQS</h1>
        </Link>
        <Link to="/contact" className="navbar-link">
        <h1>CONTACT US</h1>
        </Link>
      </div>
      <div>
        <h1 className="navbar-based"> Based in Munich </h1>
      </div>
    </section>
  </>
}

export default Nav