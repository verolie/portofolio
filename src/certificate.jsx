import React from "react";
import "./component/certificate.scss";


function Certificate() {
    return (
       <div id="certificate" className="certificate">
            <div className="block">
                <p className="title">Certificate</p>
            </div>
            <div className="container mx-0" style={{paddingLeft: "160px", paddingRight: "95px"}}>
                <div className="row">
                    <div className="col-2">
                        <div className="block">
                            <p className="certificate-list">Gajiku</p> 
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="block"  style={{backgroundColor: "#ffffff"}}>
                            <p className="certificate-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut porta quam. Aliquam mauris nibh, euismod eget ante porta, iaculis scelerisque quam. Cras lacinia bibendum tristique. Aliquam erat volutpat. Aenean ac ultricies quam, in lacinia libero. Mauris sollicitudin aliquet magna in vulputate. Vivamus a enim vitae tortor lacinia consequat. Cras condimentum diam sit amet tempus lacinia. Vestibulum laoreet fringilla mauris vel tincidunt. Sed venenatis, sem in venenatis egestas, lacus justo luctus ipsum, a fringilla ex sem ac neque. Morbi efficitur diam sit amet pretium semper. Cras vel tellus nec nisi lacinia placerat.</p> 
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="block">
                            <p className="text-date">Oct 2022</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certificate;