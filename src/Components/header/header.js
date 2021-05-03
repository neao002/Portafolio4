import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="header-wrager">
      <div className="main-info">
        <h1>Hey there!</h1>
        <h1>Im Nicolás, Full Stack MERN Developer!</h1>
        <Typed
          className="typed-Text"
          strings={[
            "Web Design",
            "Web Development",
            "Git-Hub",
            "Backend Development",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#contactme" className="btn-main-offer disabled">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
