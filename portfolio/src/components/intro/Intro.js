import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backspeed: 60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div class="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Brian Levin</h1>
          <h3>
            Software <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
