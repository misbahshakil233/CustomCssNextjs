import React from "react";
import Image from "next/image";
import styles from "../styles/AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <h2>About Me</h2>
          <p>
          I’m a passionate Full Stack Developer, experienced in building dynamic and responsive web applications.
    Currently, I’m exploring the field of Artificial Intelligence, enhancing my skills to create smarter
    and more efficient solutions. My journey involves constant learning, and I’m excited to see where this
    path leads me.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="https://freedesignfile.com/upload/2018/08/Young-pretty-female-programmer-Stock-Photo-01.jpg"
            alt="About Us"
            width={400}  // Set appropriate width
            height={300} // Set appropriate height
            className={styles.aboutImage}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
