import Image from "next/image";
import styles from "./sponsor_card.module.css";
import { Event } from "@/types/event";
import { ProgressBar } from "../ProgressBar";
import { useRouter } from "next/navigation";

interface SponsorCardProps {
  event: Event;
}
export const SponsorCard = ({ event }: SponsorCardProps) => {
  const router = useRouter();

  const handleNavigation = (category: string) => {
    router.push(`/sponsor/${category}`);
  };
  return (
    <div
      role="button"
      onClick={() => handleNavigation(event?.category)}
      className={styles.sponsor_card}
    >
      <div className={styles.sponsor_card_image}>
        <Image alt="sponsor" fill src={event?.image} />
      </div>
      <ProgressBar
        totalAmount={event?.totalAmount}
        totalReceived={event?.totalReceived}
        currency={event?.currency}
      />
      <div className={styles.sponsor_card_title_container}>
        <h4 className={styles.sponsor_card_title}>{event?.title}</h4>
        <p className={styles.sponsor_card_date}>{event?.date}</p>
      </div>
    </div>
  );
};
