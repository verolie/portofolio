import React from "react";
import "./component/home.scss";
import Foto from "./assets/foto-pribadi.png";

function Home() {
  return (
    <div className="profile">
      <div className="foto-div">
        <img src={Foto} alt="foto-pribadi" className="profile" />
      </div>
      <div className="desc-profile">
        <div className="sub-title">Veronica</div>
        <div className="description">Web Developer</div>
        <div className="text">
          <div>
            I am an Universitas Multimedia Nusantara student that studies System
            Information. I am interested in developing an application or
            website. I want to search for more experience in the IT field
            because it's fun to study more about programming.{" "}
          </div>
          <div>
            I am open to new knowledge in the IT field. I found interest in the
            programming world because of projects that I built in my university
            and teach students using javascript, C#, HTML, and CSS.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
