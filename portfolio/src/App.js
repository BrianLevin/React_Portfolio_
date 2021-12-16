import Topnav from "./components/topnav/Topnav";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import  "./app.scss";
import {useState} from "react";
import  Menu  from "./components/menue/menue";

function App() {
  const [menuOpen, setMenuOpen] =  useState(true);
  return (
    <div className="app">
      <Topnav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu />
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Work/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
