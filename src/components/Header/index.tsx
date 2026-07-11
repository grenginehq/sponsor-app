import { Button } from "../Button";
import { Icon } from "../Icon";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_navigation}>
        <div className={styles.logo_container}>
          <p className={styles.logo}>Sponsor</p>
          <div className={styles.line} />
        </div>

        <nav className={styles.nav}>
          <p>S</p>
          <a>About </a>
          <a>Community</a>
          <a>Contact Us</a>
        </nav>
      </div>
      <button className={styles.header_button}>Be a Sponsor</button>
    </header>
  );
};
