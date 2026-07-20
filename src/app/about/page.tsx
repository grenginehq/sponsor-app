import { Header } from "@/components/Header";
import Image from "next/image";
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import { Icon } from "@/components/Icon";
export default function About() {
  return (
    <div>
      <Header />
      <div className={styles.image_container}>
        <Image
          src="/assets/images/about.jpg"
          fill
          alt="about_image"
          style={{ objectFit: "cover", overflow: "hidden" }}
        />
      </div>
      <div className={styles.text_container}>
        <p className={styles.about_text_bold}>
          At Bethesda, we believe that lasting change begins with compassion in
          action. Inspired by our Christian faith, we are committed to restoring
          hope, empowering lives, and creating opportunities for individuals and
          families to flourish.
        </p>
        <p className={styles.about_text}>
          Every person deserves to be treated with dignity, valued for who they
          are, and given the opportunity to build a brighter future. Through the
          generosity of our supporters and the dedication of our volunteers and
          partners, we are making a lasting difference in communities by meeting
          practical needs, inspiring hope, and transforming lives.
        </p>
      </div>
      <div className={styles.grid_container}>
        <div className={styles.grid_flex_container}>
          <div className={styles.grid_inner_container}>
            <p className={styles.grid_text}>
              Bethesda exists to serve people in practical, meaningful, and
              life-changing ways.
            </p>
          </div>
          <div className={styles.grid_inner_container}>
            <p className={styles.grid_text}>
              Through our programmes, community initiatives, and partnerships,
              we provide support that addresses immediate needs while creating
              opportunities for long-term growth and independence. We believe
              real transformation happens when compassion is combined with
              action.
            </p>
          </div>
        </div>
        <div className={styles.grid_image_container}>
          <Image
            src="/assets/images/child.png"
            fill
            alt="about_image"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.grid_flex_container}>
          <div className={styles.grid_inner_right_top_container}>
            <p className={styles.grid_text}>
              Our work focuses on restoring dignity, building resilience,
              strengthening communities, and giving hope to those facing life's
              challenges.
            </p>
          </div>
          <div className={styles.grid_inner_right_container}>
            <p className={styles.grid_text}>
              Every project we undertake is driven by one purpose to make a
              lasting impact in the lives of the people we serve.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.about_image_container}>
        <Image
          src="/assets/images/woman.png"
          fill
          alt="about_image"
          style={{ objectFit: "cover", overflow: "hidden" }}
        />
      </div>
      <div className={styles.mission_container}>
        <h1 className={styles.container_heading}>OUR MISSION</h1>
        <p className={styles.container_text}>
          To demonstrate God's love through faith in action by meeting practical
          needs, empowering individuals and families, fostering compassionate
          communities, and creating opportunities that bring lasting hope and
          transformation.
        </p>
      </div>
      <div className={styles.vision_container}>
        <h1 className={styles.container_heading}>OUR VISION</h1>
        <div className={styles.vision_bottom_container}>
          <div className={styles.vision_flex_container}>
            <div className={styles.vision_top_flex_container}>
              <h1 className={styles.vision_heading}>TRANSFORMING LIVES</h1>
              <Icon icon="yellowIcon" />
            </div>
            <p>To see lives transformed</p>
            <div className={styles.vision_top_flex_container}>
              <h1 className={styles.vision_text}>RESTORING HOPE</h1>
              <Icon icon="grayIcon" />
            </div>
            <div className={styles.vision_building_flex_container}>
              <h1 className={styles.vision_text}>
                BUILDING STRONGER COMMUNITIES.
              </h1>
              <Icon icon="grayIcon" />
            </div>
          </div>
          <div className={styles.vision_image_container}>
            <Image
              src="/assets/images/vision.png"
              fill
              alt="vision_image"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className={styles.promise_container}>
        <h1 className={styles.container_heading}>OUR PROMISE</h1>
        <div className={styles.promise_text_container}>
          <p className={styles.container_text}>
            At Bethesda, we are committed to being faithful stewards of every
            gift entrusted to us. We value integrity, transparency, compassion,
            and excellence in all that we do.
          </p>
          <p className={styles.container_text}>
            Together with our sponsors, partners, and supporters, we are
            building a future where lives are transformed, hope is restored, and
            communities flourish.
          </p>
          <p className={styles.container_text}>
            Together, we can make a lasting difference.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
