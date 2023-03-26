import React from "react";
import "./component/about.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import cv from "./assets/CV_Veronica.pdf";

function About() {

  const onButtonClick = () => {
    fetch(cv).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = cv;
            alink.click();
        })
    })
}

  return (
    <div className="about">
      <div className="block" style={{ backgroundColor: "#9C9EFE" }}>
        <p className="title">About Me</p>
      </div>
      <div className="container mx-0">
        <div className="row">
          <div className="col">

            <div className="block">
              <p className="desc-about-left">Hello, my name is Veronica I will tell a little bit of my story.</p>
              <div className="block-desc" style={{ backgroundColor: "#FFFFFF" }}>
                <p className="desc-full-about">
                Hi Mrs or Mr, my name Veronica I am a software engineer. 
                I love in searching for a new experience in IT field especially in fullstack developer. 
                Previously,I have some experience in backend developer that using Golang language and PosgreSQL for database. 
                I also learn to use redis and Golang framework (echo labstack), 
                I also learn about using NoSql using Elasticsearch at my previous job. So now searching for a new experience to develop my IT skill.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="block" style={{ backgroundColor: "#FFFFFF" }}>
              <p className="text-bold">Email :  veyolie@gmail.com</p>
              <p className="text-bold">Phone Number :  087888302321</p>

              <div className="container" style={{paddingLeft: "100px", paddingRight: "100px"}}>
                <div className="row">
                  <div className="col">
                  <form action="https://www.instagram.com/vero_liee/" style={{display: "flex", justifyContent: "center"}}>
                    <button className="block" style={{border: "0px", marginBottom: "15px"}}><p className="text-button">My Instagram</p></button>
                    </form>
                  </div>
                  <div className="col">
                    <form action="https://www.linkedin.com/in/veronica-a245a6197/" style={{display: "flex", justifyContent: "center"}}>
                    <button className="block" style={{border: "0px", marginBottom: "15px", justifyContent: "center"}}><p className="text-button">My Linkedin</p></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
              <button className="block" style={{border: "0px", marginBottom: "15px", marginTop: "15px"}} onClick={onButtonClick}><p className="text-button">Download CSV</p></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
