import React from "react";
import "./component/navbar.scss";
import { Icon } from '@iconify/react';

function Navbar() {
  return (
    <header>
      <script src="https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js"></script>

      <div className="Navbar">
        <div className="NavLog">
          <h1 className="NavHello">Hello,</h1>
          <h1 className="NavName">my name Vero</h1>
        </div>
        <nav className="NavRoutes">
          <a href="/#" className="active">
            Home
          </a>
          <a href="/#">About</a>
          <a href="/#">Experience</a>
          <a href="/#">Certificate</a>
          <a href="/#">Skills</a>
        </nav>
        <Icon icon="bx:menu" id="menu-icon"/>
      </div>
    </header>
  );
}

let menu = document.querySelector("#menu-icon")
let navbar = document.querySelector(".NavRoutes")

menu.onclick = () => {
    menu.classList.toggle("bx:x")
    navbar.classList.toggle("open");
}

export default Navbar;
