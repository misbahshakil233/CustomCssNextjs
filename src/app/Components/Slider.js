"use client"; // Add this line to specify it's a client component

import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Slider.module.css'; // Custom CSS module

const images = [
  {
    src: '/pic1.png',
    alt: 'Programming',
  },
  {
    src: '/pic2.webp',
    alt: 'Fontend Developer',
  },
  {
    src: '/pic4.jpg',
    alt: 'Full Stack Developer',
  },
 
 
  {
    src: '/pic3.avif',
    alt: 'Artificial Intellegence',
  },
 

];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.sliderContainer}>
      <button onClick={prevSlide} className={styles.navButton}>
        &#8249;
      </button>
      <div className={styles.imageWrapper}>
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={800} // Specify desired width
          height={500} // Specify desired height
          className={styles.image}
        />
        <p className={styles.imageCaption}>{images[currentIndex].alt}</p>
      </div>
      <button onClick={nextSlide} className={styles.navButton}>
        &#8250;
      </button>
    </div>
  );
};

export default Slider;
