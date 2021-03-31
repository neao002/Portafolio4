import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";

import {
  faCoffee,
  faDesktop,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services mt-2">
      <h1 className="py-5 mt-2"> What Could i Offer ? </h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Web-Development</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
              </div>
              <h3>Github</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h3>Web-Design</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faCoffee} size="2x" />
              </div>
              <h3>Cook Sessions</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
