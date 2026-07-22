import { Header } from "@/components/Header";
import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/components/Footer";
export default function FoodBank() {
  return (
    <div>
      <Header />
      <div className={styles.image_container}>
        <Image
          src="/assets/images/food_bank.png"
          fill
          alt="food_image"
          style={{ objectFit: "cover", overflow: "hidden" }}
        />
        <div className={styles.image_text_container}>FOOD BANK</div>
      </div>
      <div className={styles.text_container}>
        <h1 className={styles.text_container_text}>
          At Bethesda Community Food Bank, we believe that no one should have to
          face hunger or hardship alone.
        </h1>
        <p className={styles.text_container_text}>
          Our Food Bank exists to provide practical support to individuals and
          families experiencing financial difficulties, unexpected crises, or
          food insecurity. We distribute essential food parcels and household
          items while creating a safe, welcoming environment where everyone is
          treated with dignity, respect, and compassion.
        </p>
        <p className={styles.text_container_text}>
          More than simply providing food, we offer hope. We build
          relationships, connect people with additional support services, and
          encourage a sense of belonging within the community. Our volunteers
          are committed to listening, caring, and walking alongside those who
          need support during difficult times.
        </p>
        <p className={styles.text_container_text}>
          Thanks to the generosity of our sponsors, donors, and volunteers, we
          can reach vulnerable people, reduce the impact of poverty, and
          strengthen our local community. Every meal provided, every family
          supported, and every act of kindness helps restore hope and reminds
          people that they are not alone.
        </p>
        <p className={styles.text_container_text}>
          Together, we are nourishing lives, strengthening communities, and
          sharing hope one family at a time.
        </p>
      </div>
      <Footer />
    </div>
  );
}
