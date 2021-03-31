import React from "react";

//npm install react-share --save
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LinkedinIcon,
} from "react-share";

function Footer() {
  return (
    <div>
      <div className="footer mt-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="d-flex mr-5">
                <p>
                  <span className="bg-green"> Address: </span> : HoeppnerStr.
                  Berlin. 12101
                </p>
              </div>
              <div className="d-flex">
                <p href="Tel: 202-292-202"> Mine number is : +49 01639286128</p>
              </div>
              <div className="d-flex">
                <p>neao002@gmail.com</p>
              </div>
            </div>
          </div>
          <div className=" d-flex mt-5 col-lg-5 col-md-5 col-sm-6 align-items-center ">
            <div className="d-flex justify-content-center socialmedia">
              <h2>Stay Connected!</h2>
              <FacebookShareButton url={"https://www.facebook.com/"}>
                <FacebookIcon className="mx-3 " />
              </FacebookShareButton>
              <TwitterShareButton url={"https://twitter.com/?lang=es"}>
                <TwitterIcon className="mx-3" />
              </TwitterShareButton>
              <LineShareButton url={"https://www.linkedin.com/"}>
                <LinkedinIcon className="mx-3" />
              </LineShareButton>
            </div>
            <p>
              Copyright&copy;{new Date().getFullYear()}
              &nbsp; Nicolás Alvarez
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
