"use client";
import styles from "./page.module.css";
import { Hero } from "../components/Hero";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import Image from "next/image";
import { cards, images, inputLists, projectCategories } from "@/constants";
import { Input } from "@/components/Input";
import { motion } from "framer-motion";
import { IconNames } from "@/types/icon";
import { useForm } from "react-hook-form";
import { useGetNewsQuery } from "@/services/newsApi";
import { useMemo } from "react";
import Logo from "@/components/Logos";
import Link from "next/link";

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
    y: 80 
  },
  visible: {
    opacity: 1,
    y: 0, 
    transition: {
      type: "spring",
      stiffness: 55,
      damping: 15,
      delayChildren: 0.2 
    },
  },
} as const;

const cardVariants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.5 }
  },
} as const

export default function Home() {
  const { control } = useForm();

  return (
    <div className={styles.main_container}>
      <Header />
      <div></div>
      <Hero />
      <motion.section
        animate={{ x: ["0%", "-50%"] }}
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }} 
            transition={smoothTransition}
            className={styles.about_text_container}
          >
            <p className={styles.about_text_bold}>
              Bethesda is a registered charity committed to transforming lives
              through faith, compassion, and action.
            </p>
            <p className={styles.about_text}>
              Rooted in the belief that every individual deserves dignity and
              opportunity, we dedicate ourselves to addressing essential needs,
              supporting personal growth, and fostering a sense of community and
              connection.
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
                variants={projectCardVariants} // Inherits visible/hidden logic smoothly
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
              style={{ objectFit: "cover" }}
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={smoothTransition}
            className={styles.footer_links_container}
          >
            <Link className={styles.footer_links} href={""}>
              Home
            </Link>
            <Link className={styles.footer_links} href={""}>
              About
            </Link>
            <Link className={styles.footer_links} href={""}>
              Community
            </Link>
            <Link className={styles.footer_links} href={""}>
              In The News
            </Link>
            <Link className={styles.footer_links} href={""}>
              Contact Us
            </Link>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
