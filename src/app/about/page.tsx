import { Header } from "@/components/Header";
import Image from "next/image";
import styles from "./about.module.css";
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
        <p></p>
      </div>
    </div>
  );
}
