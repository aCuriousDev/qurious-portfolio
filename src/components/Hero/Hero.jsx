import { Typewriter } from "react-simple-typewriter";
// import heroImage from "./images/hero-image.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Life is simple{" "}
          <span className="hero-typewriter">
            <Typewriter
              words={["Eat", "Sleep", "Code", "Repeat!"]}
              loop={0}
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={() => console.log("Loop completed!")}
              onType={(count) => console.log(`Typed ${count} words`)}
            />
          </span>
        </h1>
        <p className="hero-description">
          Add a short professional description here...
        </p>
      </div>
      <div className="hero-image">
        <img src="./images/hero-image.png" alt="Me" />
      </div>
    </div>
  );
};

export default Hero;
