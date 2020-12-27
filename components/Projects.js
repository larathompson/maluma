import React from 'react'

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

import image19 from '../images/Louis_Bench_01.jpg'
import image20 from '../images/Louis_Cupboard_01.jpg'
import image21 from '../images/Louis_Cupboard_02.jpg'

const Projects = () => {
  return <main>
    <section className='projects-outdoor'>
      <h1 className="projects-title">Outdoor Spaces</h1>
      <div className='project-individual'>
        <div className="project-individual-text">
          <h2>Blockbau</h2>
          <p>A large hen house using the traditional Bavarian technique - blockbau - with large beams</p>
        </div>
        <div className="project-individual-images">
          <img className="main-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
          <div className="project-sub">
            <img className="sub-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
            <img className="sub-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
          </div>
        </div>
      </div>

      <div className='project-individual'>
        <div className="project-individual-text">
          <h2>Peacock House</h2>
          <p>An outdoor hut made using recycled beams and boards with a fold-down deck and a fold-up wall</p>
        </div>
        <div className="project-individual-images">
          <img className="main-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
          <div className="project-sub">
            <img className="sub-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
            <img className="sub-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
          </div>
        </div>
      </div>

      <div className='project-individual'>
        <div className="project-individual-text">
          <h2>Terrace</h2>
          <p>A terrace made from PEFC larch built on concrete foundations</p>
        </div>
        <div className="project-individual-images">
          <img className="main-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
          <div className="project-sub">
            <img className="sub-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
            <img className="sub-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
          </div>
        </div>
      </div>
    </section>

    <section className='projects-house'>
      <h1 className="projects-title">Tiny Houses</h1>
      <div className='project-individual'>
        <div className="project-individual-text">
          <h2>Tiny house</h2>
          <p>A modern tiny house built on a custom trailer including a kitchen, bathroom, living area and a loft</p>
        </div>
        <div className="project-individual-images">
          <img className="main-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
          <div className="project-sub">
            <img className="sub-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
            <img className="sub-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
          </div>
        </div>
      </div>
    </section>

    <section className='projects-vans'>
      <h1 className="projects-title">Van Conversions</h1>
      <div className='project-individual'>
        <div className="project-individual-text">
          <h2>Campervan</h2>
          <p>A comfortable home on wheels with two beds, a kitchen, gas cooker, shower, solar system and plenty of storage</p>
        </div>
        <div className="project-individual-images">
          <img className="main-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
          <div className="project-sub">
            <img className="sub-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
            <img className="sub-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
          </div>
        </div>
      </div>
    </section>


    <section className='projects-furniture'>
      <h1 className="projects-title">Furniture</h1>
      <div className='project-individual'>
        <div className="project-individual-text">
          <h2>Entrance Cupboard and Bench</h2>
          <p>A large poplar cupboard with shaker style doors to tidy up the entryway of a house.</p>
        </div>
        <div className="project-individual-images">
          <img className="main-image" src={image20} />
          <div className="project-sub">
            <img className="sub-image" src={image21} />
            <img className="sub-image" src={image19}/>
          </div>
        </div>
      </div>

      <div className='project-individual'>
        <div className="project-individual-text">
          <h2>Loft Beds</h2>
          <p>Nea - A child safe, modern loft bed with plywood stairs</p>
        </div>
        <div className="project-individual-images">
          <img className="main-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
          <div className="project-sub">
            <img className="sub-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
            <img className="sub-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
          </div>
        </div>
      </div>

      <div className='project-individual'>
        <div className="project-individual-text">
          <h2>Dovetail Bed</h2>
          <p>A rustic bed made from recycled beams and connected using dovetails</p>
        </div>
        <div className="project-individual-images">
          <img className="main-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
          <div className="project-sub">
            <img className="sub-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
            <img className="sub-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
          </div>
        </div>
      </div>

      <div className='project-individual'>
        <div className="project-individual-text">
          <h2>Dovetail Bed</h2>
          <p>A rustic bed made from recycled beams and connected using dovetails</p>
        </div>
        <div className="project-individual-images">
          <img className="main-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
          <div className="project-sub">
            <img className="sub-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
            <img className="sub-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
          </div>
        </div>
      </div>

      <div className='project-individual'>
        <div className="project-individual-text">
          <h2>Coffee Table</h2>
          <p>A modern take on a coffee table using recycled brown oak</p>
        </div>
        <div className="project-individual-images">
          <img className="main-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
          <div className="project-sub">
            <img className="sub-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
            <img className="sub-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
          </div>
        </div>
      </div>

      <div className='project-individual'>
        <div className="project-individual-text">
          <h2>Dining Table</h2>
          <p>A larch dining table using traditional joinery methods</p>
        </div>
        <div className="project-individual-images">
          <img className="main-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
          <div className="project-sub">
            <img className="sub-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
            <img className="sub-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
          </div>
        </div>
      </div>

      <div className='project-individual'>
        <div className="project-individual-text">
          <h2>Stairway Storage</h2>
          <p>A practical stairway with built in cupboards. Perfect for small spaces</p>
        </div>
        <div className="project-individual-images">
          <img className="main-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
          <div className="project-sub">
            <img className="sub-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
            <img className="sub-image" src="https://www.yourlocalguardian.co.uk/resources/images/10962839.jpg?display=1&htype=0&type=responsive-gallery" />
          </div>
        </div>
      </div>
    </section>



  </main>
}

export default Projects 