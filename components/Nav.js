import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return <>
    <section>
      <div>
        <img src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
      </div>
      <div>
        <button> ENGLISH</button>
        <button> GERMAN </button>
      </div>
      <div>
        <h1>HOME</h1>
        <h1>ABOUT US</h1>
        <h1> PROCESS</h1>
        <h1>PROJECTS</h1>
        <h1>FAQS</h1>
        <h1>CONTACT US</h1>
      </div>
      <div>
        <h1> Based in Munich </h1>
      </div>
    </section>
  </>
}

export default Nav