import React from 'react';

import { Navbar, Header, Lebenslauf, Techstack, Projects, Contactform, Footer} from "./containers";
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Lebenslauf />
        <Techstack />
        <Projects />
        <Contactform />
        <Footer />
    </div>
  );
}

export default App;
