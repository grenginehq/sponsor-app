"use client";
import { images } from "@/constants";
import { Button } from "../Button";
import { Pill } from "../Pill";
import styles from "./hero.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.inner_container}>
        <Pill label="Become a proud sponsor" />
        <div className={styles.heading_container}>
          <h2 className={styles.heading}>
            Fueled b<span className={styles.hero_emphasis}>y</span> Vision{" "}
            <br /> Powe<span className={styles.hero_emphasis}>r</span>ed by Pa
            <span className={styles.hero_emphasis}>r</span>tners
          </h2>
        </div>
        <p className={styles.description}>
          Help us bring our project to life while making impact <br />
          to the community at large.
        </p>
        <Button type="button" variant="primary" label="Be a Sponsor" />
      </div>
      <motion.section
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
        className={styles.grid_container}
      >
        <div className={styles.marquee_track}>
          {[...images, ...images].map((image, index) => (
            <div key={index + 1} className={styles.hero_image}>
              <Image
                src={image.src}
                fill
                alt={image.alt}
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </motion.section>{" "}
    </div>
  );
};
