import { mobilePortfolio } from "../../data";
import "./work.scss";

import React, { useState } from "react";
export default function Work() {
const[currentSlide,setCurrentSlide] = useState(0);

const data =[
  {
    id: "1",
    icon: "./assets/mobile.png",
    title: "Web Design",
    desc:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    img: "https://neilpatel.com/wp-content/uploads/2021/08/social-media-metrics.jpg",
},
{
  id: "2",
  icon: "./assets/globe.png",
  title: "Mobile Application",
  desc:
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  img: "https://neilpatel.com/wp-content/uploads/2021/08/social-media-metrics.jpg",
},

{
  id: "3",
  icon: "./assets/writing.png",
  title: "Branding",
  desc:
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  img: "https://neilpatel.com/wp-content/uploads/2021/08/social-media-metrics.jpg",
},
];

const handleClick =(way) =>{


  way === "left" ? setCurrentSlide(currentSlide > 0  ? currentSlide -1 : 2) :
  setCurrentSlide(currentSlide <data.length -1? currentSlide +1 :0);
}



  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)` }}>
        {data.map((d) => (
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>
                 {d.desc}
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right"> 
            

            <img src= "https://miro.medium.com/max/1024/1*GaBtlHe240ZkwlcBrFczgQ.jpeg" alt="" />
            
            </div>
          </div>
          
        </div> 
        ))}
      </div>
        
      <img src="assets/arrow.png" className= "arrow left" alt= "" onClick={() => handleClick("left")} />
      <img src="assets/arrow.png" className= "arrow right" alt= ""  onClick={() => handleClick()}/>
    </div>
  );
}
