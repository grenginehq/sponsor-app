import styles from "./page.module.css";
import { Hero } from "../components/Hero";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import Image from "next/image";
export default function Home() {
  const images = [
    {
      src: "/assets/images/old_woman.png",
      alt: "Old woman",
    },
    {
      src: "/assets/images/children.png",
      alt: "Children",
    },
    {
      src: "/assets/images/cyclist.png",
      alt: "cyclists",
    },
    {
      src: "/assets/images/wedding.png",
      alt: "wedding",
    },
    {
      src: "/assets/images/birthday.png",
      alt: "birthday",
    },
    {
      src: "/assets/images/family.png",
      alt: "family",
    },
    {
      src: "/assets/images/students.png",
      alt: "students",
    },
  ];
  return (
    <div className={styles.main_container}>
      <Header />
      <Hero />
      <section className={styles.grid_container}>
        {images.map((image) => (
          <div className={styles.image}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </section>
      <section className={styles.purpose_container}>
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
            <Icon icon="fundraiser" />
            <Icon icon="giftaid" />
          </div>
        </div>
        <div className={styles.purpose_right_container}>
          <p className={styles.purpose_description}>
            When you sponsor our events , your capital doesn’t just fund an
            event—it <br /> directly fuels local initiatives that transform our
            community from the ground <br />
            up. Partner with us to create measurable community impact where it
            matters <br />
            most.
          </p>
          <Button variant="primary" type="button" label="Start Now" />
        </div>
      </section>
      <div className={styles.prospective_container}>
        <h1 className={styles.prospective_heading}>
          Perspectives from Our Partners
        </h1>
      </div>
    </div>
  );
}
