import styles from "./logos.module.css";
import { Icon } from "../Icon";

export default function Logo() {
  return (
    <div>
      <div className={styles.main_container}>
        <div className={styles.inner_container}>
          <Icon icon="skykick" />
          <Icon icon="notch" />
          <Icon icon="recipe" />
          <Icon icon="vena" />
          <Icon icon="passporthealth" />
        </div>
      </div>
    </div>
  );
}
