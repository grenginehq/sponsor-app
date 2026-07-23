"use client";
import { Icon } from "@/components/Icon";
import { projectCategories } from "@/constants";
import styles from "./page.module.css";

export default function Sponsor() {
  
  return (
    <div className={styles.sponsor}>
      <header className={styles.sponsor_header}>
        <Icon icon="logo4" />
      </header>
      <div className={styles.sponsor_filters_container}>

      <div className={styles.sponsor_filters}>
        {projectCategories.map((category) => {
          return (
            <div className={styles.sponsor_filter}></div>
          )
        })}
        </div>
      </div>
    </div>
  );
}
