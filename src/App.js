import React from "react";

import { Navbar, Hero, Lebenslauf, Techstack, Projects, Contactform, Footer} from "./containers";
import "./App.css";


function App() {
  return (
    <div className="App">
        <div className="app__nav" id="home">
          <Navbar />
        </div>
        <div className="app__body">
          <Hero />
          <Techstack />
          <Projects />
          <Contactform />
          <Footer />
        </div>
    </div>
  );
}

export default App;
