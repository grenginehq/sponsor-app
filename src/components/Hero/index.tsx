"use client";
import { useEffect, useState } from "react";
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
            Together
            <br />
            We Can Transform Lives
          </h2>
          <p className={styles.description}>
            Help us bring our project to life while making impact <br />
            to the community at large.
          </p>
          <p className={styles.mobile_description}>
            Help us bring our project to life while <br /> making impact to the
            community at <br /> large.
          </p>
          <Button type="button" variant="primary" label="Donate Now" />
        </div>
      </div>

      <section className={styles.grid_container}>
        <motion.div 
          className={styles.marquee_track}
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {images.concat([...images, ...images]).map((image, index) => (
            <div 
              key={`marquee-img-${index}`} 
              className={styles.hero_image}
            >
              <Image
                src={image.src}
                fill
                alt={image.alt}
                sizes="(max-width: 1440px) 150px, 200px"
              />
            </div>
          ))}
        </motion.div>
      </section>

      <div className={styles.hero_top_right_image}>
        <div className={styles.hero_image}>
          <Image
            src="/assets/images/guy_and_woman.jpg"
            alt="group"
            fill
            sizes="(max-width: 1440px) 150px, 200px"
          />
        </div>
      </div>
      <div className={styles.hero_top_left_image}>
        <div className={styles.hero_image}>
          <Image
            src="/assets/images/guy.jpg"
            alt="guy"
            fill
            sizes="(max-width: 1440px) 150px, 200px"
          />
        </div>
      </div>
      <div className={styles.hero_bottom_left_image}>
        <div className={styles.hero_image}>
          <Image
            src="/assets/images/church.jpg"
            alt="group"
            fill
            sizes="(max-width: 1440px) 150px, 200px"
          />
        </div>
      </div>
      <div className={styles.hero_bottom_right_image}>
        <div className={styles.hero_image}>
          <Image
            src="/assets/images/christmas.jpg"
            alt="group"
            fill
            sizes="(max-width: 1440px) 150px, 200px"
          />
        </div>
      </div>
    </div>
  );
};