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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            rerum est eaque recusandae pariatur? Qui perspiciatis nihil dicta
            eveniet, impedit, magnam est aliquid aspernatur eaque laboriosam
            quisquam unde porro aperiam. A tempora voluptatibus nemo hic
            exercitationem? Tempore temporibus qui nemo. Eaque amet minima sunt
            illum totam ipsum quidem maxime? Obcaecati, repellendus aliquid.
            Eligendi voluptatibus harum fugiat inventore velit suscipit
            cupiditate. Illo veniam inventore quibusdam! Minima impedit
            reprehenderit dolorum! Numquam impedit quas dolores consequatur,
            excepturi odio dolore reprehenderit mollitia, maiores soluta enim
            nobis, aliquam obcaecati provident officia doloribus nulla?
            Aspernatur, voluptas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
