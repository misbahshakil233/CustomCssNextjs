"use client"; // Ensure client-side rendering for state handling
import { useState } from 'react';
import styles from '../styles/Skills.module.css';

const skillsData = {
  frontend: [
    { icon: '📄', title: 'HTML', description: 'Structuring web content efficiently.' },
    { icon: '🎨', title: 'CSS', description: 'Styling webpages to make them beautiful and responsive.' },
    { icon: '💻', title: 'JavaScript', description: 'Interactive web elements using JavaScript.' },
    { icon: '🖼️', title: 'Tailwind CSS', description: 'Utility-first CSS framework.' },
    { icon: '📊', title: 'Bootstrap', description: 'Popular CSS framework for responsive designs.' },
    { icon: '⚛️', title: 'Reactjs', description: 'Building interactive UIs with components.' },
    { icon: '🔗', title: 'Nextjs', description: 'React framework for server-side rendering.' },
    { icon: '🎨', title: 'Sadcn', description: 'Efficient UI component library.' }
  ],
  
  backend: [
    { icon: '⚙️', title: 'Node.js', description: 'JavaScript runtime for scalable backend services.' },
    { icon: '📦', title: 'Express', description: 'Web framework for building RESTful APIs.' }
  ],
  database: [
    { icon: '🗄️', title: 'MongoDB', description: 'NoSQL database for flexible and scalable data storage.' },
    { icon: '🗃️', title: 'MySQL', description: 'Relational database management system.' }
  ],
  other: [
    { icon: '📣', title: 'Digital Marketing', description: 'Strategies to promote products and increase sales.' },
    { icon: '🔍', title: 'SEO', description: 'Search engine optimization to boost visibility.' },
    { icon: '🛍️', title: 'Freelancing', description: 'Providing skills as services to clients.' },
    { icon: '🖌️', title: 'Canva', description: 'Designing visually appealing graphics.' },
    { icon: '🖼️', title: 'Photoshop', description: 'Advanced photo and graphic editing software.' }
  ],
  personal: [
    { icon: '⏳', title: 'Time Management', description: 'Efficiently managing time to boost productivity.' },
    { icon: '👑', title: 'Leadership', description: 'Leading teams to achieve success and goals.' },
    { icon: '🤝', title: 'Communication', description: 'Effective interaction with teams and clients.' },
    { icon: '💡', title: 'Problem Solving', description: 'Finding efficient solutions to complex challenges.' }
  ]
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.skillsContainer}>
      <h1 className={styles.header}>Professional Skills</h1>
      <div className={styles.categoryButtons}>
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? styles.activeButton : ''}
            onClick={() => handleCategoryChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className={styles.skillsCards}>
        {skillsData[selectedCategory].map((skill, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{skill.icon}</div>
            <div className={styles.content}>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
