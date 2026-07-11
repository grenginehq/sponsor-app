import styles from "./page.module.css";
import { Hero } from "../components/Hero";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
export default function Home() {
  return (
    <div className={styles.main_container}>
      <Header />
      <Hero />
      <div className={styles.purpose_container}>
        <div className={styles.purpose_text_container}>
          <div>
            <p className={styles.purpose_title}>THE APP</p>
            <h1 className={styles.purpose_heading}>
              Purpose- Driven
              <br />
              Partnership
            </h1>
          </div>
          <div className={styles.purpose_images_container}>hi</div>
        </div>
        <div className={styles.right_container}>
          <p className={styles.purpose_description}>
            When you sponsor our events , your capital doesn’t just fund an
            event—it <br /> directly fuels local initiatives that transform our
            community from the ground <br />
            up. Partner with us to create measurable community impact where it
            matters <br />
            most.
          </p>
          <Button variant="primary" type="button" label="Start Now"/>
        </div>
      </div>
      <div className={styles.prospective_container}>
        <h1 className={styles.prospective_heading}>
          Perspectives from Our Partners
        </h1>
      </div>
    </div>
  );
}
