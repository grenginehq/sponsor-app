import styles from "./page.module.css";
import { Hero } from "../components/Hero";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import Image from "next/image";
import { cards, inputLists, projectCategories } from "@/constants";
import { Input } from "@/components/Input";
export default function Home() {
  return (
    <div className={styles.main_container}>
      <Header />
      <div></div>
      <Hero />
      <section className={styles.purpose_container}>
        <div className={styles.purpose_text_container}>
          <div>
            <p className={styles.purpose_title}>THE APP</p>
            <h1 className={styles.purpose_heading}>
              Purpose- Driven
              <br />
              Partnership
            </h1>
          </div>
          <div className={styles.purpose_images_container}>
            <Icon icon="fundraiser" />
            <Icon icon="giftaid" />
          </div>
        </div>
        <div className={styles.purpose_right_container}>
          <p className={styles.purpose_description}>
            When you sponsor our events , your capital doesn’t just fund an
            event—it <br /> directly fuels local initiatives that transform our
            community from the ground <br />
            up. Partner with us to create measurable community impact where it
            matters <br />
            most.
          </p>
          <Button variant="primary" type="button" label="Start Now" />
        </div>
      </section>
      <div className={styles.perspective_container}>
        <h1 className={styles.perspective_heading}>
          Perspectives from Our Partners
        </h1>
        <div className={styles.perspective_image_container}>
          <div>
            <h1 className={styles.perspective_title}>Sandara Opoku</h1>
            <p>Joined 2017</p>
          </div>
          <div className={styles.perspective_image}>
            <Image
              src="/assets/images/partner.jpg"
              alt="partner"
              fill
              style={{ objectFit: "cover", borderRadius: "50px" }}
            />
          </div>
        </div>
      </div>
      <section className={styles.news_container}>
        <div className={styles.news_top_container}>
          <h1 className={styles.news_heading}>In the News</h1>
          <Button variant="primary" type="button" label="Read all stories" />
        </div>
        <div className={styles.news_cards_container}>
          {cards.map((card, index) => (
            <div className={styles.news_card} key={index + 1}>
              <div className={styles.news_card_image_container}>
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.news_card_text_container}>
                <div>
                  <h1 className={styles.news_card_heading}>{card.title}</h1>
                  <p className={styles.news_card_title}>{card.description}</p>
                </div>
                <button className={styles.news_card_button}>
                  <Icon icon="arrowdown" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.project_container}>
        <div className={styles.project_text_container}>
          <h1 className={styles.project_text_container_heading}>
            Start a sponsor project
          </h1>
          <p className={styles.project_text_container_title}>
            Make a difference by choosing a project to start with
          </p>
          <Button type="button" variant="primary">
            Start a project now
          </Button>
        </div>
        <div className={styles.projects_card_container}>
          {projectCategories.map((projectCategory, index) => (
            <div key={index + 1}>
              {/* <Icon icon={projectCategory.image} key={index + 1} /> */}
              <div className={styles.projects_cards}>
                {projectCategory.label}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.contact_us}>
        <div className={styles.contact_us_text_container}>
          <div>
            <h1 className={styles.contact_us_text_container_heading}>
              Contact us
            </h1>
            <p className={styles.contact_us_text_container_title}>
              We’d love to hear from you - send us a <br />
              message and we’ll be in touch soon
            </p>
          </div>
          <h1 className={styles.contact_us_text_container_email}>
            example@gmail.com
          </h1>
        </div>
        <div className={styles.contact_us_input_container}>
          {inputLists.map((inputlist, index) => (
            <label
              htmlFor="name"
              key={index + 1}
              className={styles.contact_us_label}
            >
              <p>{inputlist}</p>
              {/* <Input type="email" name="email" control={control} /> */}
            </label>
          ))}
        </div>
      </section>
    </div>
  );
}
