import React from "react";

//npm install react-share --save
import {
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="d-flex mr-5">
                <p>
                  <span className="bg-green"> Address: </span> : Hoeppner
                  Strasse Berlin. 12101
                </p>
              </div>
              <div className="d-flex">
                <p href="Tel: 202-292-202"> Mobile Phone :+49 0163 962 81 28</p>
              </div>
              <div className="d-flex">
                <p>Email : neao002@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <h2>Stay Connected with me!</h2>
            <div className="ml-5 d-flex justify-content-center">
              <a target="_blank" href="https://github.com/neao002">
                <i id="gitHubLogo" className="fab fa-github" title="GitHub"></i>
              </a>

              <EmailShareButton url={"https://mail.google.com/mail/u/0/#inbox"}>
                <EmailIcon className="mx-3" />
              </EmailShareButton>
              <LinkedinShareButton
                url={
                  "https://www.linkedin.com/in/nicolas-%C3%A1lvarez-609bb9165/"
                }
              >
                <LinkedinIcon className="mx-3" />
              </LinkedinShareButton>
            </div>
            <p className="mt-5">
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
