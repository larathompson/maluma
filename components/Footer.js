import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return <>
    {/* <hr style={{
      // color: '#FFFAF1',
      backgroundColor: '#FFFAF1',
      width: 4000,
      height: .5,
      borderColor: '#FFFAF1'
    }} /> */}

    <footer>


      <div className="footer-address">
        <p><b>Address</b></p>
        <p> LINE1</p>
        <p> LINE2</p>
        <p> LINE3</p>
      </div>
      <div className="footer-contact">
        <p> <b>Contact</b> </p>
        <p>023903853945e907</p>
        <p>wiggy@wiggy.com</p>
      </div>
      <div className="footer-images">
        <div className="footerMedia">
          <a href="#" className="fa fa-instagram fa-4x"></a>
        </div>
        <div className="footerLogo">
          <i className="fa fa-recycle"></i>
        </div>
      </div>

    </footer>
  </>

}

export default Footer