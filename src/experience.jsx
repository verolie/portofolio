import React from "react";
import "./component/experience.scss";


function Experience() {
  return (
    <div id="experience" className="experience">
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
              <div className="square" style={{ backgroundColor: "rgba(156, 158, 254, 0.2)", borderLeft: "4px solid #D1D2FF"}}>
                <p className="list-text" >Finexus</p>
              </div>
            </div>   
          </div>

          <div className="col-8">
            <div className="list-description">
              <div className="block" style={{marginRight: "190px", width: "auto"}}>
                <p className="title-job">Laboratory Assistance</p>
              </div>

              <div className="block" style={{background:"white"}}>
                <p className="exp-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut porta quam. Aliquam mauris nibh, euismod eget ante porta, iaculis scelerisque quam. Cras lacinia bibendum tristique. Aliquam erat volutpat. Aenean ac ultricies quam, in lacinia libero. Mauris sollicitudin aliquet magna in vulputate. Vivamus a enim vitae tortor lacinia consequat. Cras condimentum diam sit amet tempus lacinia. Vestibulum laoreet fringilla mauris vel tincidunt. Sed venenatis, sem in venenatis egestas, lacus justo luctus ipsum, a fringilla ex sem ac neque. Morbi efficitur diam sit amet pretium semper. Cras vel tellus nec nisi lacinia placerat.
                </p>
              </div>
            </div>
          
          </div>

        </div>

      </div>
    </div>
  );
}

export default Experience;
