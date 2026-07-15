import Link from "next/link";
import { Button } from "../Button";
import { Icon } from "../Icon";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_navigation}>
        <Icon icon="logo2" />
      </div>
      <nav className={styles.nav}>
        {/* <Icon icon="search" /> */}
        <Link className={styles.nav_link} href={""}>
          About{" "}
        </Link>
        <Link className={styles.nav_link} href={""}>
          Community Food Bank
        </Link>
        <Link className={styles.nav_link} href={""}>
          Educational Programs
        </Link>
        <Link className={styles.nav_link} href={""}>
          Unity & Well-being
        </Link>{" "}
        <Link className={styles.nav_link} href={""}>
          Contact Us
        </Link>
      </nav>
      <div className={styles.header_button_container}>
        <Button type="button" variant="primary">
          Donate now
        </Button>
      </div>
    </header>
  );
};
