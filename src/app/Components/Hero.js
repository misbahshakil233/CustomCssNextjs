"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image'; // Import Image component
import styles from '../styles/Home.module.css';

const Hero = () => {
    const [text, setText] = useState("I am Misbah");
    const indexRef = useRef(0); // Use useRef to keep track of index

    const texts = useMemo(() => ["I am Misbah", "I am a Full Stack Developer", "Now I am exploring AI"], []); // Memoizing texts

    useEffect(() => {
        const interval = setInterval(() => {
            indexRef.current = (indexRef.current + 1) % texts.length; // Update index in useRef
            setText(texts[indexRef.current]);
        }, 2000);

        return () => clearInterval(interval);
    }, [texts]); // Now texts is safe in the dependency array

    return (
        <section className={styles.heroContainer} id="home">
            <div className={styles.circularBackground}></div>
            <div className={styles.heroCard}>
                <div className={styles.leftContent}>
                    <h1 className={styles.headingLarge}>{text}</h1>
                    <h3 className={styles.headingSmall}>Welcome to my portfolio!</h3>
                    <p className={styles.content}>
                        I am a passionate developer with a love for creating intuitive and dynamic user experiences. Let&apos;s work together to bring your ideas to life!
                    </p>
                    <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                        <button className={styles.button} onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            Contact Me
                        </button>
                        <button className={styles.button} onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                           Download CV
                        </button>
                    </div>
                </div>
                <div className={styles.rightImage}>
                    <Image
                        src="https://static.vecteezy.com/system/resources/previews/025/793/343/non_2x/capturing-the-essence-of-a-multicultural-qa-engineer-meticulously-engaged-in-uncovering-and-resolving-bugs-in-software-code-preparing-for-a-flawless-launch-with-determination-ai-generative-free-photo.jpg"
                        alt="Hero Image"
                        width={500} // Specify the width
                        height={300} // Specify the height
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
