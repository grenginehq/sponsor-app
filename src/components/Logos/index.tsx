import styles from "./logos.module.css";
import { Icon } from "../Icon";

export default function Logos() {
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <Icon icon="skykick" />
        <Icon icon="notch" />
        <Icon icon="recipe" />
        <Icon icon="vena" />
        <Icon icon="passporthealth" />
      </div>
      <div className={styles.inner_tablet_container}>
        <div className={styles.logos_flex_container}>
          <Icon icon="skykick" />
          <Icon icon="notch" />
        </div>
        <div className={styles.logos_flex_container}>
          <Icon icon="recipe" />
          <Icon icon="vena" />
          <Icon icon="passporthealth" />
        </div>
      </div>
    </div>
  );
}
