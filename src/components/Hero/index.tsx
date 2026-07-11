import { Button } from "../Button";
import { Pill } from "../Pill";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.inner_container}>
       <Pill label="Become a proud sponsor" />
        <div className={styles.heading_container}>
          <h2 className={styles.heading}>Fueled b<span className={styles.hero_emphasis}>y</span> Vision <br /> Powe<span className={styles.hero_emphasis}>r</span>ed by Pa<span className={styles.hero_emphasis}>r</span>tners</h2>
        </div>
        <p className={styles.description}>
          Help us bring our project to life while making impact <br />
          to the community at large.
        </p>
        <Button type="button" variant="primary" label="Be a Sponsor" />
      </div>
      <div className={styles.images}></div>
    </div>
  );
}
