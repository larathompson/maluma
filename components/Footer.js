import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return <>
<footer>
  <div className="footerAddress">
  <p> Address</p>
</div>
<div className="footerContact">
<p>02390385394548e907</p>
</div>
<div className="footerMedia">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/600px-Instagram-Icon.png"/>
</div>
<div className="footerLogo">
<img src="https://www.recycling.com/wp-content/uploads/2016/06/Universal-Recycling-Symbol-U2672.jpg"/>
</div>

</footer>
  </>

}

export default Footer