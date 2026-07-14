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
      <div className={styles.hero_images_container}>
        <div className={styles.hero_images}>
          <Image
            src="/assets/images/white_man.png"
            alt="white_man"
            fill
            objectFit="cover"
          />
        </div>
        <div className={styles.hero_images}>
          <Image
            src="/assets/images/group.png"
            alt="group"
            fill
            objectFit="cover"
          />
        </div>
      </div>
      <div className={styles.inner_container}>
        <Pill label="Become a proud sponsor" />
        <div className={styles.heading_container}>
          <h2 className={styles.heading}>
            Together <br /> We Can Transfrom Lives
          </h2>
        </div>
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
      <div className={styles.hero_images_container}>
        <div className={styles.hero_images}>
          <Image
            src="/assets/images/white_man.png"
            alt="white_man"
            fill
            objectFit="cover"
          />
        </div>
        <div className={styles.hero_images}>
          <Image
            src="/assets/images/group.png"
            alt="group"
            fill
            objectFit="cover"
          />
        </div>
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
      </motion.section>
    </div>
  );
};
