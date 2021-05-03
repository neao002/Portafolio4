import React from "react";

const Experiences = () => {
  return (
    <div id="experience" className="experience mt-2">
      <h1>Experience</h1>
      <div className="d-flex justify-content-center my-5">
        <div className="container experience-wrapper">
          {/* - */}
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>2020-2021</h3>
              <p>Full Stack MERN Developer in DCI Digital Career Institute.</p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>2009-2012</h3>
              <p>Bachelor's Degree in Hotel, Administration and Management.</p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>2007-2008</h3>
              <p>Culinary Degree. ICC - Instituto Culinario de Caracas</p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>2015-2019</h3>
              <p>Kitchen Head Chef.Holy Flat-Berlin</p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>2014-2015</h3>
              <p>Logistics and Organization Specialist. Apoio.co - Berlin</p>
            </div>
          </div>
          {/* - */}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
