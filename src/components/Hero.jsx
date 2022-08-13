import React from "react";

import hero from "../images/image-hero-desktop.png";
import heroMobile from "../images/image-hero-mobile.png";

import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";

import "../styles/hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="title">
          <span> Make </span> 
          Remote Work
        </div>
        <div className="subtitle">
          <p>
            Get your team in sync. no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
        </div>
        <div className="button">
          <button>Learn more</button>
        </div>
        <div className="hero__clients">
          <div className="hero__client">
            <img src={databiz} alt="Databiz" />
          </div>
          <div className="hero__client">
            <img src={audiophile} alt="Audiophile" />
          </div>
          <div className="hero__client">
            <img src={meet} alt="Meet" />
          </div>
          <div className="hero__client">
            <img src={maker} alt="Maker" />
          </div>
        </div>
      </div>
      <div className="hero__image">
        <img src={hero} alt="hero image" />
      </div>
      <div className="hero__image__mobile">
        <img src={heroMobile} alt="hero image" />
      </div>
    </section>
  );
};

export default Hero;
