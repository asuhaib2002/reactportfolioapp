import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/person.png" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Suhaib Shariff</h6>
            <h3>A Python Developer</h3>
            <p>
                I'm an enthusiastic learner who's always striving to learn new things and to improve my skills to be the best version of myself.
                motivated and driven, thriving on challenges and constantly setting goals for myself. 
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;