import React from "react";
import "./component/experience.scss";


function Experience() {
  return (
    <div className="experience">
      <div className="block">
        <p className="title">Experience</p>
      </div>

      <div className="container mx-0" style={{paddingLeft: "100px", paddingRight: "100px"}}>
        <div className="row">
          <div className="col">

            <div className="list">
              <div className="square">
                <p className="list-text">Universitas Multimedia Nusantara</p>
              </div>
              <div className="square" style={{ backgroundColor: "rgba(156, 158, 254, 0.2)", borderLeft: "4px solid #D1D2FF"}}>
                <p className="list-text" >Finpoint</p>
              </div>
            </div>   
          </div>

          <div className="col-8">
            <div className="list-description">
              <div className="block" style={{marginRight: "190px", width: "auto"}}>
                <p className="title-job">Laboratory Assistance</p>
              </div>

              <div className="block" style={{background:"white"}}>\
                <p className="exp-desc"></p>
              </div>
            </div>
          
          </div>

        </div>

      </div>
    </div>
  );
}

export default Experience;
