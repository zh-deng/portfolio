import React from "react";

import { Navbar, Header, Lebenslauf, Techstack, Projects, Contactform, Footer} from "./containers";
import "./App.css";

function App() {
  return (
    <div className="App">
        <div className="app__nav">
          <Navbar />
        </div>
        <div className="app__body">
          <Header />
          <Techstack />
          <Projects />
          <Contactform />
          <Footer />
        </div>
    </div>
  );
}

export default App;
