"use client";
import styles from "./page.module.css";
import { Hero } from "../components/Hero";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import Image from "next/image";
import { cards, inputLists, projectCategories } from "@/constants";
import { Input } from "@/components/Input";
// import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { IconNames } from "@/types/icon";
import { useForm } from "react-hook-form";
import { useGetNewsQuery } from "@/services/newsApi";
import { useMemo } from "react";

export default function Home() {
  const { control } = useForm();

  return (
    <div className={styles.main_container}>
      <Header />
      <div></div>
      <Hero />
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{
          once: false,
          amount: 0.3,
        }}
        className={styles.purpose_container}
      >
        <div className={styles.purpose_text_container}>
          <div>
            <p className={styles.purpose_title}>THE APP</p>
            <h1 className={styles.purpose_heading}>
              Purpose- Driven
              <br />
              Partnership
            </h1>
          </div>
          <div className={styles.purpose_images_container}>
            {/* <div className={styles.purpose_track}> */}
            <Icon icon="fundraiser" />
            <Icon icon="giftaid" />
            {/* <Icon icon="fundraiser" />
              <Icon icon="giftaid" /> */}
            {/* </div> */}
          </div>
        </div>
        <div className={styles.purpose_right_container}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className={styles.purpose_description}
          >
            When you sponsor our events , your capital doesn’t just fund an
            event—it directly fuels local initiatives that transform our
            community from the ground up. Partner with us to create measurable
            community impact where it matters most. Partner with us to create
            measurable, lasting community impact where it matters most.
            Together, we can turn corporate generosity into tangible blessings
            and meaningful change, demonstrating God's love through a dedicated
            collaboration that builds a stronger, more resilient neighborhood
            for everyone.
          </motion.p>

          <p className={styles.purpose_description}></p>

          <Button variant="primary" type="button" label="Start Now" />
        </div>
      </motion.section>
      {/* <section className={styles.perspective_container}>
        <h1 className={styles.perspective_heading}>
          Perspectives from Our Partners
        </h1>
        <div className={styles.perspective_image_container}>
          <div>
            <h1 className={styles.perspective_title}>Sandara Opoku</h1>
            <p>Joined 2017</p>
          </div>
          <div className={styles.perspective_image}>
            <Image
              src="/assets/images/partner.jpg"
              alt="partner"
              fill
              style={{ objectFit: "cover", borderRadius: "50px" }}
            />
          </div>
        </div>
      </section> */}
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
      {/* <section className={styles.news_container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          className={styles.news_top_container}
        >
          <h1 className={styles.news_heading}>In the News</h1>
          <Button variant="primary" type="button" label="Read all stories" />
        </motion.div>
        <div className={styles.news_cards_container}>
          {filteredNews?.map((newsItem, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className={styles.news_card}
              key={index + 1}
            >
              <div className={styles.news_card_image_container}>
                <Image
                  src={newsItem.image}
                  alt={newsItem.alt}
                  width={300}
                  height={300}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={styles.news_card_text_container}
              >
                <div className={styles.news_card_text}>
                  <h1 className={styles.news_card_heading}>{newsItem.title}</h1>
                  <p className={styles.news_card_title}>
                    {newsItem.description}
                  </p>
                </div>
                <button className={styles.news_card_button}>
                  <Icon icon="arrowdown" />
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section> */}
      <section className={styles.contact_us}>
        <div className={styles.contact_us_top_container}>
          <div className={styles.contact_us_logo_container}>
            <Icon icon="skykick" />
            <Icon icon="notch" />
            <Icon icon="recipe" />
            <Icon icon="vena" />
            <Icon icon="passporthealth" />
          </div>
        </div>
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
        {/* <div className={styles.contact_us_text_container}>
          <div>
            <h1 className={styles.contact_us_text_container_heading}>
              Contact us
            </h1>
            <p className={styles.contact_us_text_container_title}>
              We’d love to hear from you - send us a <br />
              message and we’ll be in touch soon
            </p>
          </div>
        </div> */}
      </section>
      <footer className={styles.footer}>
        <div className={styles.footer_left_container}>
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
          <small className={styles.footer_text}>
            © 2026 Bethseda Foodbank Inc. All rights reserved.
          </small>
        </div>
        <div className={styles.footer_links_container}>
          <a className={styles.footer_links}>Home</a>
          <a className={styles.footer_links}>About</a>
          <a className={styles.footer_links}>Community</a>
          <a className={styles.footer_links}>In The News</a>
          <a className={styles.footer_links}>Contact Us</a>
        </div>
      </footer>
    </div>
  );
}
