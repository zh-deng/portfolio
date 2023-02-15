import React from "react";

import { Navbar, Header, Lebenslauf, Techstack, Projects, Contactform, Footer} from "./containers";
import "./App.css";

function App() {
  return (
    <div className="App">
        <div className="app__head">
          <Navbar />
          <Header />
        </div>
        <div className="app__body">
          <Techstack />
          <Projects />
          <Contactform />
          <Footer />
        </div>
    </div>
  );
}

export default App;
