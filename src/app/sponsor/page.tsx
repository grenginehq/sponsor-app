"use client";
import Checkbox from "@/components/Checkbox";
import { Icon } from "@/components/Icon";
import { SponsorCard } from "@/components/SponsorCard";
import { events, projectCategories } from "@/constants";
import Image from "next/image";
import { useForm } from "react-hook-form";
import styles from "./page.module.css";

export default function Sponsor() {
  const { control } = useForm();
  return (
    <div className={styles.sponsor}>
      <header className={styles.sponsor_header}>
        <Icon icon="logo4" />
      </header>
      <div className={styles.sponsor_dashboard}>
        <div className={styles.sponsor_filters_container}>
          <p>Projects</p>
          <div className={styles.sponsor_filters}>
            {projectCategories.map((category, index) => {
              return (
                <div
                  key={`category_${index + 1}`}
                  className={styles.sponsor_filter}
                >
                  <Checkbox
                    label={category?.label}
                    id={category?.label}
                    name={"category"}
                    value={category?.value}
                    control={control}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.sponsor_dashboard_main}>
          <div className={styles.sponsor_dashboard_main_image}>
            <Image alt="background" fill src="/assets/images/background.jpg" />
            <div className={styles.sponsor_dashboard_main_title_container}>
              <h1 className={styles.sponsor_dashboard_main_title}>
                Good morning
              </h1>
              <p className={styles.sponsor_dashboard_main_description}>
                Hello dear. Welcome to Bethseda Sponsor App!
              </p>
            </div>
          </div>
          <div className={styles.sponsor_dashboard_main_grid}>
            {events?.map((event, index) => {
              return <SponsorCard key={`event_${index + 1}`} event={event} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
