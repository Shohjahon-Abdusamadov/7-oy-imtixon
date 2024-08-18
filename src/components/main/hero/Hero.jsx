import React from "react";
import styles from "./hero.module.scss";
import heroImage from "../../images/Hero.png";

const Hero = () => {
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className={styles.heroInfo}>
        <p style={{paddingTop: '221px'}}>/ Start / Categories </p>
        <p style={{marginBottom: '31px'}}> / Headphones and audio for gaming</p>

        <h1>Headphones AND AUDIO FOR GAMING</h1>
      </div>
    </div>
  );
};

export default Hero;
