"use client";
import styles from "./page.module.css";
import { Hero } from "../components/Hero";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import Image from "next/image";
import { cards, images, inputLists, projectCategories } from "@/constants";
import { Input } from "@/components/Input";
// import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { IconNames } from "@/types/icon";
import { useForm } from "react-hook-form";
import { useGetNewsQuery } from "@/services/newsApi";
import { useMemo } from "react";
import Logo from "@/components/Logos";

export default function Home() {
  const { control } = useForm();

  return (
    <div className={styles.main_container}>
      <Header />
      <div></div>
      <Hero />
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
          {images.concat(images).map((image, index) => (
            <div key={index + 1} className={styles.hero_image}></div>
          ))}
        </div>
      </motion.section>
      <section className={styles.about_section}>
        <h1>The Vision Behind Bethseda</h1>
        <div className={styles.about_container}>
          <div className={styles.about_text_container}>
            <p>
              Bethesda is a registered charity committed to transforming lives{" "}
              <br />
              through faith, compassion, and action.
            </p>
            <p>
              Rooted in the belief that every individual deserves dignity and
              opportunity, <br /> we dedicate ourselves to addressing essential
              needs, supporting personal <br /> growth, and fostering a sense of
              community and connection.
            </p>
            <p>
              Bethesda is a registered charity committed to transforming lives
              through <br />
              faith, compassion, and action.
            </p>
            <p>
              Rooted in the belief that every individual deserves dignity and
              opportunity,
              <br /> we dedicate ourselves to addressing essential needs,
              supporting personal <br /> growth, and fostering a sense of
              community and connection.
            </p>
          </div>
          <div className={styles.about_image_container}>
            <Image
              src="/assets/images/reverend.png"
              alt="reverend_image"
              fill
              objectFit="cover"
            />
          </div>
        </div>
      </section>
      <div>
        <Logo />
        <section className={styles.project_container}>
          <div className={styles.project_top_container}>
            <div className={styles.project_text_container}>
              <h1 className={styles.project_text_container_heading}>
                Start a sponsor project
              </h1>
              <p className={styles.project_text_container_title}>
                Make a difference by choosing a project to start with. Select a
                project to get you started.
              </p>
            </div>
            <Button type="button" variant="primary">
              Donate Now
            </Button>
          </div>
          <div className={styles.projects_card_container}>
            {projectCategories.map((projectCategory, index) => (
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                key={index + 1}
                className={styles.projects_card}
              >
                <Icon icon={projectCategory.icon as IconNames} />
                {projectCategory.label}
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <section className={styles.contact_us}>
        <Logo />
        <div className={styles.contact_us_container}>
          <div className={styles.contact_us_form_container}>
            <h1 className={styles.contact_us_text_container_heading}>
              Contact us
            </h1>
            <p className={styles.contact_us_text_container_title}>
              We’d love to hear from you - send us a <br />
              message and we’ll be in touch soon
            </p>
            <form className={styles.contact_us_input_container}>
              <Input control={control} type="text" name="name" label="NAME" />
              <Input
                control={control}
                type="email"
                name="email"
                label="EMAIL ADDRESS"
              />
              <Input
                control={control}
                type="text"
                name="message"
                label="MESSAGE"
              />
            </form>
          </div>
          <div className={styles.contact_us_image_container}>
            <Image
              src="/assets/images/employee.png"
              alt="employee_img"
              fill
              objectFit="cover"
            />
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <Icon icon="footerlogo" />
        <div className={styles.footer_right_container}>
          <div className={styles.footer_logos_container}>
            <div className={styles.footer_logo_container}>
              <Icon icon="instagram" />
            </div>
            <div className={styles.footer_logo_container}>
              <Icon icon="facebook" />
            </div>
            <div className={styles.footer_logo_container}>
              <Icon icon="linkedin" />
            </div>
          </div>
          <div className={styles.footer_links_container}>
            <a className={styles.footer_links}>Home</a>
            <a className={styles.footer_links}>About</a>
            <a className={styles.footer_links}>Community</a>
            <a className={styles.footer_links}>In The News</a>
            <a className={styles.footer_links}>Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
