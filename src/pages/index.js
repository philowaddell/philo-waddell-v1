import React from 'react';
import AppBar from '../components/appbar/AppBar'
import Home from '../components/sections/Home';
import About from '../components/sections/About';
import Projects from '../components/sections/Portfolio';
import '../styles/GlobalStyles.css';

const IndexPage = () => {
  const pages = [
    "home",
    "about",
    "skills",
    "education",
    "portfolio",
    "contact",
  ];
  return (
    <div id="view-port">
      <AppBar pages={pages}/>
      <div id="scroll-port">
        <Projects />
        <Home />
        <About />
        <Projects />
      </div>
    </div>
  );
};

export default IndexPage;
