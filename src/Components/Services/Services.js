import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";

import {
  faCoffee,
  faDesktop,
  faFileCode,
  faFaHtml5,
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
              <h3>Front-End</h3>
              <div class="frontEndIcon">
                <i class="fab fa-html5 3px"></i>

                <i class="fab fa-js"></i>
                <i class="fab fa-css3"></i>
                <i class="fab fa-sass"></i>
                <i class="fab fa-react"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle githubLink">
                <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
              </div>

              <a
                className="githubLink"
                href="https://github.com/neao002"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Github</h3>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h3>Web-Design</h3>
            </div>
          </div>{" "}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faCoffee} size="2x" />
              </div>
              <h3>Back-End</h3>
              <div class="backEndIcon">
                <i class="fab fa-node"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
