import React from "react";

import Image from "../Aboutme/me.jpg";

const Aboutme = () => {
  return (
    <div id="aboutme" className="container py-5 mt-2">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-1">
            <img className="profile-img" src={Image} alt="imageaboutme" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">Who am I?</h1>
          <p>
            I'm Currently finishing my Full MERN stack year course in Digital
            Career Institute.. I'm passionate about researching and developing
            frontend and backend projects. I'm constantly researching about new
            technologies so I can stay up to date.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
