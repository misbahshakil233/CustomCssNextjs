// components/Contact.js
import Image from 'next/image';
import styles from '../styles/Contact.module.css'; // Import custom CSS module

const Contact = () => {
  return (
    <div className={styles.contactContainer} id='contact'>
      <div className={styles.formContainer}>
        <h2 className={styles.header}>Contact Us</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>Name</label>
            <input type="text" id="name" name="name" className={styles.formInput} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Email</label>
            <input type="email" id="email" name="email" className={styles.formInput} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>Message</label>
            <textarea id="message" name="message" className={styles.formTextarea} required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image} // Use the styles from CSS
          src="https://th.bing.com/th/id/OIP.TohGrQa49HsgBEMx7tAzTgHaD2?w=1250&h=651&rs=1&pid=ImgDetMain"
          alt="Hero Image"
          width={500} // Specify an appropriate width
          height={500} // Specify an appropriate height
        />
      </div>
    </div>
  );
};

export default Contact;
