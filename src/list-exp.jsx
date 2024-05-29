import { useState } from "react";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Experience from "./experience";
import Certificate from "./certificate";
import Skill from "./skill";
import "./App.scss";

function App() {
  const company = ["Universitas Multimedia Nusantara", "Finpoint", "Finexus"];

  let companyList = [];

  company.forEach((comp, index) => {
    companyList.push(<p className="list-text" key={index}>{comp}</p>);
  });  

  return (
    <div className="square">
         {com}
    </div>
  );
}

export default App;<script>
    function ExperienceList()
</script>;

