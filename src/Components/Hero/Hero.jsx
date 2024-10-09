import React from "react";
import "./Hero.css";
import hand from "../Assets/hand.png"
import hero_image from "../Assets/hero_image.png"
import arrow from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>NEW ARRIVALS</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand} alt="hand_image" />
                </div>
                <p>Collection</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>
                    Latest Collection
                    <img src={arrow} alt="" />
                </div>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="hero_image" />
        </div>
    </div>

  );
};

export default Hero;
