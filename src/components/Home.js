import React from "react";
import "../App.css";
import Mail from "./svg/Mail";
import Typewriter from "typewriter-effect";
const Home = () => {
  const fonthelp = {
    fontSize: "5.5rem",
  };
  return (
    <div>
      <div className="d-flex flex-column text-left" id="home-hero">
        <div className="p-2 vertical">
          <span style={fonthelp}>
            <Typewriter
              options={{
                strings: `hi, aryan here.`,
                autoStart: true,
                loop: true,
                pauseFor:2500,
              }}
            />
          </span>
        </div>
        <div className="p-2">
          <p
            className="text-start"
            style={{ color: "#8892b0", fontSize: "1.4rem" }}
          >
            I'm a computer science student based in Delhi, India. I have great
            interest in Fullstack Development, competitive programming and
            love solving hard engineering problems.
          </p>
        </div>
        <a
          href="mailto:aryan.sethi18@gmail.com"
          style={{ textDecoration: "none" }}
        >
          <button
            type="button"
            className="btn btn-secondary btn-lg"
            id="say-hi"
          >
            <Mail /> Say Hi!
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
