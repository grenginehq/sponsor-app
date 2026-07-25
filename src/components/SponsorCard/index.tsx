import Image from "next/image";
import styles from "./sponsor_card.module.css";
import { Event } from "@/types/event";

interface SponsorCardProps {
  event: Event;
}
export const SponsorCard = ({ event }: SponsorCardProps) => {
  return (
    <div className={styles.sponsor_card}>
      <div className={styles.sponsor_card_image}>
        <Image alt="sponsor" fill src={event?.image} />
      </div>
      <div className={styles.sponsor_card_title_container}>
        <h4 className={styles.sponsor_card_title}>{event?.title}</h4>
        <p className={styles.sponsor_card_date}>{event?.date}</p>
      </div>
    </div>
  );
};
