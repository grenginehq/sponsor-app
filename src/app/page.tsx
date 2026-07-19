"use client";
import styles from "./page.module.css";
import { Hero } from "../components/Hero";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import Image from "next/image";
import { images, projectCategories } from "@/constants";
import { Input } from "@/components/Input";
import { motion } from "framer-motion";
import { IconNames } from "@/types/icon";
import { useForm } from "react-hook-form";
import { useGetNewsQuery } from "@/services/newsApi";
import { useMemo } from "react";
import Logos from "@/components/Logos";
import Link from "next/link";
import Footer from "@/components/Footer";

const smoothTransition = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1.0],
  duration: 0.8,
} as const;

const projectGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
} as const;

const projectCardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: smoothTransition,
  },
} as const;

const cardContainerVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 55,
      damping: 15,
      delayChildren: 0.2,
    },
  },
} as const;

const cardVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
} as const;

export default function Home() {
  return (
    <div className={styles.main_container}>
      <Header />
      <Hero />
      <section className={styles.about_section}>
        <h1>The Vision Behind Bethseda</h1>
        <div className={styles.about_container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={smoothTransition}
            className={styles.about_text_container}
          >
            <p className={styles.about_text_bold}>
              At Bethesda, we believe that lasting change begins with compassion
              in action. Inspired by our Christian faith, we are committed to
              restoring hope, empowering lives, and creating opportunities for
              individuals and families to flourish.
            </p>
            <p className={styles.about_text}>
              Every person deserves to be treated with dignity, valued for who
              they are, and given the opportunity to build a brighter future.
              Through the generosity of our supporters and the dedication of our
              volunteers and partners, we are making a lasting difference in
              communities by meeting practical needs, inspiring hope, and
              transforming lives.
            </p>
          </motion.div>
          <div className={styles.about_image_container}>
            <Image
              src="/assets/images/reverend.png"
              alt="reverend_image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
      <div>
        <Logos />
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
              <p className={styles.project_text_container_mobile_title}>
                Make a difference by choosing a project to start with. Select a
                project to get you <br /> started.
              </p>
            </div>
            <div className={styles.project_button_container}>
              <Button type="button" variant="primary">
                Donate Now
              </Button>
            </div>
          </div>
          <motion.div
            className={styles.projects_card_container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={projectGridVariants}
          >
            {projectCategories.map((projectCategory, index) => (
              <motion.div
                key={index + 1}
                className={styles.projects_card}
                variants={projectCardVariants}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                }}
              >
                <Icon icon={projectCategory.icon as IconNames} />
                {projectCategory.label}
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
      <section className={styles.card_section}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.01 }}
          variants={cardContainerVariants}
          className={styles.cards_container}
        >
          <motion.div variants={cardVariants} className={styles.light_card}>
            <div className={styles.card_text_container}>
              <h1 className={styles.card_number}>01</h1>
              <div className={styles.card_bottom_text_container}>
                <h1 className={styles.card_heading}>Unity and Wellbeing</h1>
                <p className={styles.card_description}>
                  We believe that sharing a meal is one of the most sacred ways
                  to show God’s love. Our church’s food pantry is more than a
                  distribution site—it is a ministry of grace. Guided by the
                  call to love our neighbours as ourselves, we provide
                  nutritious food and essential supplies to families navigating
                  difficult seasons.
                </p>
                <p className={styles.desccription}>
                  By easing the immediate burden of hunger, we seek to be the
                  hands and feet of Jesus, helping our community regain the
                  stability, dignity, and hope they deserve.
                </p>
              </div>
              <div className={styles.card_bottom_text_mobile_container}>
                <h1 className={styles.card_heading}>Unity and Wellbeing</h1>
                <p className={styles.card_description}>
                  By easing the immediate burden of hunger, we seek to be the
                  hands and feet of Jesus, helping our community regain the
                  stability, dignity, and hope they deserve.
                </p>
              </div>
            </div>
            <div className={styles.card_image_container}>
              <div className={styles.card_image}>
                <Image
                  src="/assets/images/wellbeing.png"
                  alt="wellbeing_img"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </motion.div>
          <motion.div variants={cardVariants} className={styles.medium_card}>
            <div className={styles.card_text_container}>
              <h1 className={styles.card_number}>02</h1>
              <div className={styles.card_bottom_text_container}>
                <h1 className={styles.card_heading}>Education for All</h1>
                <p className={styles.card_description}>
                  At our core, we believe everyone deserves the opportunity to
                  thrive. Our tailored programs go beyond education—we cultivate
                  hands-on skills, foster personal growth, and build a
                  supportive community that empowers every individual to pave
                  their own path to success.
                </p>
                <p className={styles.desccription}>
                  As a foundation, we provide the vital resources and
                  wrap-around support needed to turn hope into sustainable
                  independence.
                </p>
              </div>
              <div className={styles.card_bottom_text_mobile_container}>
                <h1 className={styles.card_heading}>Education for All</h1>
                <p className={styles.card_description}>
                  As a foundation, we provide the vital resources and
                  wrap-around support needed to turn hope into sustainable
                  independence.
                </p>
              </div>
            </div>
            <div className={styles.card_image_container}>
              <div className={styles.card_image}>
                <Image
                  src="/assets/images/education.png"
                  alt="education_img"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </motion.div>
          <motion.div variants={cardVariants} className={styles.dark_card}>
            <div className={styles.card_text_container}>
              <h1 className={styles.card_number}>03</h1>
              <div className={styles.card_bottom_text_container}>
                <h1 className={styles.card_heading}>Food Assistance</h1>

                <p className={styles.card_description}>
                  We believe that sharing a meal is one of the most sacred ways
                  to show God’s love. Our church’s food pantry is more than a
                  distribution site—it is a ministry of grace. Guided by the
                  call to love our neighbours as ourselves, we provide
                  nutritious food and essential supplies to families navigating
                  difficult seasons.
                </p>
                <p className={styles.desccription}>
                  By easing the immediate burden of hunger, we seek to be the
                  hands and feet of Jesus, helping our community regain the
                  stability, dignity, and hope they deserve.
                </p>
              </div>
              <div className={styles.card_bottom_text_mobile_container}>
                <h1 className={styles.card_heading}>Food Assistance</h1>
                <p className={styles.card_description}>
                  Our food bank provides essential supplies to families, helping
                  them regain stability and hope.
                </p>
              </div>
            </div>
            <div className={styles.card_image_container}>
              <div className={styles.card_image}>
                <Image
                  src="/assets/images/food.png"
                  alt="food_img"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
