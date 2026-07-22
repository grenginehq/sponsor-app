"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Logos";
import styles from "./footer.module.css";
import { useForm } from "react-hook-form";
import { Icon } from "../Icon";
import { Input } from "@/components/Input";
import { motion } from "framer-motion";

const smoothTransition = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1.0],
  duration: 0.8,
} as const;

export default function Footer() {
  const { control } = useForm();
  return (
    <div>
      <section className={styles.contact_us}>
        <div className={styles.mobile_logos_container}>
          <Logo />
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
            <p className={styles.contact_us_text_mobile_container_title}>
              We’d love to hear from you - send us a message and we’ll be in
              touch soon
            </p>
            <form className={styles.contact_us_input_container}>
              <Input
                variant="outlined"
                control={control}
                type="text"
                name="name"
                label="NAME"
              />
              <Input
                control={control}
                type="email"
                name="email"
                variant="outlined"
                label="EMAIL ADDRESS"
              />
              <Input
                control={control}
                type="text"
                name="message"
                variant="outlined"
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
        <Icon className={styles.footer_logo} icon="footerlogo" />
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
            <Link className={styles.footer_links} href={"/"}>
              Home
            </Link>
            <Link className={styles.footer_links} href={"/about"}>
              About
            </Link>
            <Link className={styles.footer_links} href={"/foodBank"}>
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
