import React from "react";
import styles from "../styles/InfoBoxes.module.css";

const InfoBoxes = () => {
  const data = [
    { title: "Experience", number: "5+" },
    { title: "Projects", number: "20+" },
    { title: "Years", number: "3" },
    { title: "Clients", number: "15+" },
  ];

  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <div  key={index} className={styles.box}>
          <div className={styles.circularBorder}></div>
          <h3>{item.title}</h3>
          <p>{item.number}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoBoxes;
