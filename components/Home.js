import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import smallHouse from '../images/smallHouse.png'

const Home = () => {
  return <main className="home-main">
    <img src={smallHouse}/>
    {/* <div className='homeImage'>
      <img src={smallHouse} alt="smallHouse" />
    </div> */}
    <section className="home-philosophy">
      <div>
        <p> Philosophy - Our philosophy is to use and reuse environmental materials combined with architectural influences to design smarter living solutions.</p>
      </div>
      <div>
        <img src="https://www.recycling.com/wp-content/uploads/2016/06/Universal-Recycling-Symbol-U2672.jpg" />
      </div>
    </section>
    <section className="home-contact">
      <h1> GET IN TOUCH</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/600px-Instagram-Icon.png" />
    </section>
    <section className="home-featured">
      <div className="home-featured-one">
        <p>Featured Project: Entrance Cupboard</p>
        <div className="home-featured-one-images">
          <img src="https://www.widefashion.com/wp-content/uploads/2018/12/a-modern-wooden-house.jpg" />
          <img src="https://www.widefashion.com/wp-content/uploads/2018/12/a-modern-wooden-house.jpg" />
          <img src="https://www.widefashion.com/wp-content/uploads/2018/12/a-modern-wooden-house.jpg" />
        </div>
      </div>
      <div className="home-featured-two">
        <img src="https://kidlycatalogue.blob.core.windows.net/products/6678/product-images/neutral-1/olli-ella-holdie-house-neutral-1920x760_01.jpg" />

        <p> Customer review: I like this house a lot </p>
      </div>
    </section>
  </main>

}

export default Home
