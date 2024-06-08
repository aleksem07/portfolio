// import Image from "next/image";
import styles from "@/styles/components/about-me.module.scss";

const AboutMe = () => {
  return (
    <section className={styles.about_me}>
      <h2 className={styles.about_me__title}>
        My mission is to make design easier.
      </h2>
      <p className={styles.about_me__desc}>
        Create custom Designs with AARONN that converts more visitors than any
        website. With lots of unique design, you can easily select a logo
        without hassle. Create custom landing logos with AARONN that converts
        more visitors than any website. With lots of revisions, you can easily
        build a logo without porbolem.
      </p>
      {/* <Image
        src="/placeholder-pic.jpg"
        className={styles.about_me__img}
        alt="Developer`s photo"
        width={361}
        height={415}
      /> */}
    </section>
  );
};

export default AboutMe;
