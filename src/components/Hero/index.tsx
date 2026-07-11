import { Button } from "../Button";
import { Header } from "../Header";
import { Pill } from "../Pill";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <div className={styles.main_container}>
      <Header />
      <div className={styles.inner_container}>
       <Pill label="Become a proud sponsor" />
        <div className={styles.heading_container}>
          <h2 className={styles.heading}>Fueled by Vision <br /> Powered by Partners</h2>
        </div>
        <p className={styles.description}>
          Help us bring our project to life while making impact <br />
          to the community at large.
        </p>
        <Button type="button" variant="primary" label="Be a Sponsor" />
      </div>
    </div>
  );
}
