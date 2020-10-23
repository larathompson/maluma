import React from 'react'

const About = () => {
  return <>
    <main className="about-main">
      <div className="about-line">
        <p > We are the Mühlbach Kollektiv team, a group of carpenters and joiners from Munich and London. We’re focused on bringing your ideas to life.</p>
        <p> We are a group of 3 friends with a combined goal of designing unique projects.  We are qualified, open-minded carpenters and joiners.</p>
      </div>
      
      <div className="about-info">
        <img src="https://www.widefashion.com/wp-content/uploads/2018/12/a-modern-wooden-house.jpg" />
        <p> What We Do - We use a mixture of our carpentry and joinery skills to offer a broad range of services. We have experience building tiny houses, van conversions, furniture, outdoor spaces and blockbau etc. We are always looking for new projects to improve our skills and deliver a quality piece. </p>
      </div>

      <section className="about-people">

        <div className="about-person">
          <img src="https://www.widefashion.com/wp-content/uploads/2018/12/a-modern-wooden-house.jpg" />
          <p>Kostja - carpenter </p>
        </div>

        <div className="about-person">
            <img src="https://www.widefashion.com/wp-content/uploads/2018/12/a-modern-wooden-house.jpg" />
            <p>Louis - joiner</p>
        </div>

        <div className="about-person">
            <  img src="https://www.widefashion.com/wp-content/uploads/2018/12/a-modern-wooden-house.jpg" />
            <p>Max - carpenter </p>
        </div>

        
      </section>

      <div className="aboutPhilosophy">
        <p>Philosophy - Our philosophy is to use and reuse environmental materials combined with architectural influences to design smarter living solutions.</p>
        <p>Based in Munich BUT we work WORLDWIDE</p>
      </div>
  

    </main>
  </>

}

export default About 
