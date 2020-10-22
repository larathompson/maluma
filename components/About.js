import React from 'react'

const About = () => {
  return <>
    <main className="aboutMain">
      <div>
        <h1 className="aboutLine"> This is a quick line about us</h1>
      </div>
      <section className="aboutProfile">
        <div className="aboutSingleProfile">
          <img src="https://specials-images.forbesimg.com/imageserve/5f5a618e174e49a914dfc1f9/960x0.gif?fit=scale" />
          <p> This is WIggy he likes carving wood </p>
        </div>
        <div className="aboutSingleProfile">
          <img src="https://www.mentalup.co/img/blog/famous-people-6.jpg" />
          <p> This is Max he likes carving wood </p>
        </div>
        <div className="aboutSingleProfile">
          <img src="https://images.fastcompany.net/image/upload/w_1153,ar_16:9,c_fill,g_auto,f_auto,q_auto,fl_lossy/wp-cms/uploads/2019/12/p-1-greta-thunberg-was-just-named-time-magazines-2019-person-of-the-year.jpg" />
          <p> This is Max he likes carving wood </p>
        </div>
        <div className="aboutPhilosophy">
          <p>Our Philosophy is to ...</p>
          <p>BASED IN MUNICH BUT WE WORK WORLDWIDE</p>
        </div>
      </section>

    </main>
  </>

}

export default About 
