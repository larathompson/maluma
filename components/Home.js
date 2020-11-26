import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import image1 from '../images/smallHouse.png'
import image2 from '../images/sink.jpeg'
import image3 from '../images/exterior.jpeg'
import image4 from '../images/stairs.jpeg'
import image5 from '../images/beach.jpeg'
import image6 from '../images/busShelter.jpeg'
import image7 from '../images/ceiling.jpeg'
import image8 from '../images/cupboards.jpeg'
import image9 from '../images/decking.jpeg'
import image10 from '../images/folding.jpeg'
import image11 from '../images/insideHouse.jpeg'
import image12 from '../images/joining.jpeg'
import image13 from '../images/lakeHouse.jpeg'
import image14 from '../images/light.jpeg'
import image15 from '../images/outside.jpeg'
import image16 from '../images/polish.jpeg'
import image17 from '../images/steps.jpeg'
import image18 from '../images/woodSelection.jpeg'


const Home = () => {
  return <main className="home-main">
    <div>
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={image1} className="sliderimg" />
        <img src={image2} className="sliderimg" />
        <img src={image3} className="sliderimg" />
        <img src={image4} className="sliderimg" />
        <img src={image5} className="sliderimg" />
        <img src={image6} className="sliderimg" />
        <img src={image7} className="sliderimg" />
        <img src={image8} className="sliderimg" />
        <img src={image9} className="sliderimg" />
        <img src={image10} className="sliderimg" />
        <img src={image11} className="sliderimg" />
        <img src={image12} className="sliderimg" />
        <img src={image13} className="sliderimg" />
        <img src={image14} className="sliderimg" />
        <img src={image15} className="sliderimg" />
        <img src={image16} className="sliderimg" />
        <img src={image17} className="sliderimg" />
        <img src={image18} className="sliderimg" />

      </AliceCarousel>
    </div>

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
          <img src={image1} />
          <img src= {image4} />
          <img src={image17} />
        </div>
      </div>
      <div className="home-featured-two">
        <img src= {image11} />

        <p> Customer review: I like this house a lot </p>
      </div>
    </section>
  </main>

}

export default Home
