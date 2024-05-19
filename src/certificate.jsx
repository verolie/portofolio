import React from "react";
import "./component/certificate.scss";


function Certificate() {
    return (
       <div id="certificate" className="certificate">
            <div className="block">
                <p className="title">Certificate</p>
            </div>
            <div className="container mx-0" style={{paddingLeft: "280px"}}>
                <div className="row">
                    <div className="col-2" style={{marginTop: "8px"}}>
                        <div className="block">
                            <p className="certificate-list">Gajiku</p> 
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="block"  style={{backgroundColor: "#ffffff"}}>
                            <p className="certificate-title-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut porta quam.</p> 
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