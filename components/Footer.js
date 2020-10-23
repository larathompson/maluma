import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return <>
<footer>
  <div className="footer-address">
  <p> Address</p>
  <p> LINE1</p>
  <p> LINE2</p>
  <p> LINE3</p>
</div>
<div className="footer-contact">
<p>023903853945e907</p>
<p>wiggy@wiggy.com</p>
</div>
<div className="footer-images">
<div className="footerMedia">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/600px-Instagram-Icon.png"/>
</div>
<div className="footerLogo">
<img src="https://www.recycling.com/wp-content/uploads/2016/06/Universal-Recycling-Symbol-U2672.jpg"/>
</div>
</div>

</footer>
  </>

}

export default Footer