import React from "react";
import { Header } from "../Header";
import styles from "./hero.module.css";
export default function Hero() {
  return (
    <div className={styles.main_container}>
      <Header />
      <div className={styles.inner_container}>
        <button className={styles.first_button}>Become a proud Sponsor</button>
        <div className={styles.heading_container}>
          <h2 className={styles.heading}>Fueled by Vision </h2>
          <h2 className={styles.heading}>Powered by Partners</h2>
        </div>
        <p className={styles.description}>
          Help us bring our project to life while making impact <br />
          to the community at large.
        </p>
        <button className={styles.second_button}>Be a Sponsor</button>
      </div>
    </div>
  );
}
