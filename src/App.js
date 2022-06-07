import React from "react";

import { Navbar } from "./components";
import "./App.scss";
import { About, Header, CompanyProjects, Footer, Skills, Work } from "./container";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <CompanyProjects />
    <Footer />
  </div>
);

export default App;
