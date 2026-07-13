import { Button } from "../Button";
import { Icon } from "../Icon";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_navigation}>
        <Icon icon="logo" />
        <nav className={styles.nav}>
          <Icon icon="search" />
          <a>About </a>
          <a>Community</a>
          <a>Contact Us</a>
        </nav>
      </div>
      <div className={styles.header_button_container}>
        <Button type="button" variant="secondary">
          Become a Sponsor
        </Button>
      </div>
    </header>
  );
};
