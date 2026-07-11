import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left_container}>
        <div className={styles.first_container}>
          <p className={styles.logo}>Sponsor</p>
          <div className={styles.line} />
        </div>

        <nav className={styles.nav}>
          <p>S</p>
          <a className={styles.link}>About </a>
          <a className={styles.link}>Community</a>
          <a className={styles.link}>Contact Us</a>
        </nav>
      </div>
      <button className={styles.header_button}>Be a sponsor</button>
    </header>
  );
};
