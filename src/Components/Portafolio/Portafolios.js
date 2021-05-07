import React from "react";

import Project1 from "./Images/burger.png";
import Project2 from "./Images/trackexpenses.jpg";
import Project3 from "./Images/recordshop.png";
import Project4 from "./Images/yourTv.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

import { PopupboxManager, PopupboxContainer } from "react-popupbox";

import "react-popupbox/dist/react-popupbox.css";

const Portafolio = () => {
  // record shop

  const PopupBoxRecordShop = () => {
    const content = (
      <>
        <img
          className="image-popup-burger"
          src={Project3}
          alt="Record Shop-with_react"
        />
        <p className="mt-5"> Vinilo Shop created with React.</p>
        <b>Github: </b>

        <a
          className="recordshop-link"
          onClick={() =>
            window.open("https://github.com/neao002/RecordShop-with_react")
          }
        >
          "https://reactproject-fbw41-1.github.io/Record-Shop-project/#/"
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popConfigRecordShop = {
    titleBar: {
      enable: true,
      text: "My Project",
    },
    fadeIn: true,
    fadeInSpeed: 200,
  };

  // PopupBoxBurger

  const PopupBoxBurger = () => {
    const content = (
      <>
        <img
          className="image-popup-burger"
          src={Project1}
          alt="Pop up Box Burger"
        />
        <p className="mt-5">Check Github for more details</p>
        <b>Github: </b>
        <a
          className="recordshop-link"
          onClick={() =>
            window.open("https://github.com/neao002/Try-our-Burger-Laden-")
          }
        >
          "https://github.com/neao002/Try-our-Burger-Laden-"
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popConfigBurger = {
    titleBar: {
      enable: true,
      text: "Burger shop Project",
    },
    fadeIn: true,
    fadeInSpeed: 200,
  };
  // PopupTrackExpenses

  const PopupTrackExpenses = () => {
    const content = (
      <>
        <img
          className="image-popup-burger"
          src={Project2}
          alt="Pop u pTrack Expenses"
        />
        <p className="mt-5">Check Github for more details</p>
        <b>Github: </b>
        <a
          className="recordshop-link"
          onClick={() =>
            window.open("https://github.com/neao002/React-track-expenses")
          }
        >
          https://github.com/neao002/React-track-expenses"
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popConfigtrack = {
    titleBar: {
      enable: true,
      text: "Track Expenses Project",
    },
    fadeIn: true,
    fadeInSpeed: 200,
  };

  // YourTvproject

  const PopupYourTv = () => {
    const content = (
      <>
        <img
          className="image-popup-burger"
          src={Project4}
          alt="Pop up You Tv"
        />
        <p className="mt-5">Check Github for more details</p>
        <b>Github: </b>
        <a
          className="recordshop-link"
          onClick={() => window.open("https://github.com/neao002/Your-T_V")}
        >
          https://github.com/neao002/Your-T_V"
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popConfigTv = {
    titleBar: {
      enable: true,
      text: "My Project",
    },
    fadeIn: true,
    fadeInSpeed: 200,
  };

  // render

  return (
    <div>
      <div id="Portafolio" className="portafolio-wrapper mt-2">
        <div className="container">
          <h1 className="text-uppercase text-center py-5">Portfolio</h1>
          <div className="image-box-wrapper row justify-content-center">
            <div className="portafolio-image-box" onClick={PopupBoxRecordShop}>
              <img
                className="portafolio-image"
                src={Project3}
                alt="PopupBoxRecordShop"
              />
              <div className="overflow"></div>
              <FontAwesomeIcon
                className="icon-portafolio"
                icon={faSearchPlus}
              />
            </div>

            <div className="portafolio-image-box" onClick={PopupBoxBurger}>
              <img
                className="portafolio-image"
                src={Project1}
                alt="PopupBoxBurger"
              />
              <div className="overflow"></div>
              <FontAwesomeIcon
                className="icon-portafolio"
                icon={faSearchPlus}
              />
            </div>

            <div className="portafolio-image-box" onClick={PopupTrackExpenses}>
              <img
                className="portafolio-image"
                src={Project2}
                alt="PopupTrackExpenses"
              />
              <div className="overflow"></div>
              <FontAwesomeIcon
                className="icon-portafolio"
                icon={faSearchPlus}
              />
            </div>
            <div className="portafolio-image-box" onClick={PopupYourTv}>
              <img
                className="portafolio-image"
                src={Project4}
                alt="PopupYourTv"
              />
              <div className="overflow"></div>
              <FontAwesomeIcon
                className="icon-portafolio"
                icon={faSearchPlus}
              />
            </div>
          </div>
        </div>
      </div>
      <PopupboxContainer {...popConfigtrack} />

      <PopupboxContainer {...popConfigBurger} />

      <PopupboxContainer {...popConfigRecordShop} />

      <PopupboxContainer {...popConfigTv} />
    </div>
  );
};
export default Portafolio;
