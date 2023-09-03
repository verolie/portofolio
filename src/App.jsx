import { useState } from "react";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Experience from "./experience";
import Certificate from "./certificate";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar className="App-Navbar" />
      <body>
        <Home className="App-Home" />
        <About className="App-About" />
        <Experience className="App-Experience"/>
        <Certificate className="App-Certificate"/>
      </body>
    </div>
  );
}

export default App;
