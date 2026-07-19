import { Header } from "@/components/Header";
import Image from "next/image";
import styles from "./about.module.css";
import Footer from "@/components/Footer";
export default function About() {
  return (
    <div>
      <Header />
      <div className={styles.image_container}>
        <Image
          src="/assets/images/about.png"
          fill
          alt="about_image"
          style={{ objectFit: "cover", overflow: "hidden" }}
        />
      </div>
      <div className={styles.text_container}>
        <p className={styles.about_text_bold}>
          At Bethesda, we believe that lasting change begins with compassion in
          action. Inspired by our Christian faith, we are committed to restoring
          hope, empowering lives, and creating opportunities for individuals and
          families to flourish.
        </p>
        <p className={styles.about_text}>
          Every person deserves to be treated with dignity, valued for who they
          are, and given the opportunity to build a brighter future. Through the
          generosity of our supporters and the dedication of our volunteers and
          partners, we are making a lasting difference in communities by meeting
          practical needs, inspiring hope, and transforming lives.
        </p>
      </div>
      <div className={styles.image_container}>
        <Image
          src="/assets/images/woman.png"
          fill
          alt="about_image"
          style={{ objectFit: "cover", overflow: "hidden" }}
        />
      </div>
      <div className={styles.mission_container}>
        <h1 className={styles.mission_container_heading}>OUR MISSION</h1>
        <p className={styles.mission_container_text}>
          To demonstrate God's love through faith in action by meeting practical
          needs, empowering individuals and families, fostering compassionate
          communities, and creating opportunities that bring lasting hope and
          transformation.
        </p>
      </div>
      <Footer />
    </div>
  );
}
