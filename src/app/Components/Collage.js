// "use client";

// import React, { useState } from "react";
// import styles from "../styles/Collage.module.css";

// const Collage = () => {
//     const [rotateIndex, setRotateIndex] = useState(null);

//     const handleMouseEnter = (index) => {
//         setRotateIndex(index);
//     };
// // 
//     const handleMouseLeave = () => {
//         setRotateIndex(null);
//     };

//     return (
//         <div className={styles.collageContainer}>
//             <div className={styles.largeImage}>
//                 <img
//                     src="https://via.placeholder.com/400"
//                     alt="Large Central"
//                 />
//             </div>
//             <div className={styles.smallImages}>
//                 {[1, 2, 3, 4].map((num, index) => (
//                     <div
//                         key={index}
//                         className={`${styles.smallImage} ${rotateIndex === index ? styles.rotate : ""}`}
//                         onMouseEnter={() => handleMouseEnter(index)}
//                         onMouseLeave={handleMouseLeave}
//                     >
//                         <img
//                             src={`https://via.placeholder.com/150?text=Image+${num}`}
//                             alt={`Small Image ${num}`}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Collage;
