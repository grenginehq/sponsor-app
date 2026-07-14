import { Button } from "../Button";
import { Icon } from "../Icon";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_navigation}>
        <Icon icon="logo2" />
        <nav className={styles.nav}>
          <Icon icon="search" />
          <a className="link">About </a>
          <a className="link">Community</a>
          <a className="link">Contact Us</a>
        </nav>
      </div>
      <div className={styles.header_button_container}>
        <Button type="button" variant="primary">
          Donate now
        </Button>
      </div>
    </header>
  );
};
