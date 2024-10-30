import styles from '../styles/Portfolio.module.css';

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A complete e-commerce website with product catalog and checkout.',
    image: '/ecommerce.jpeg',
    link: 'https://your-ecommerce-link.vercel.app',
  },
  {
    title: 'AirForShare Clone',
    description: 'A clone of AirForShare for sharing files and text.',
    image: '/air.jpeg',
    link: 'https://your-airforeshare-clone.vercel.app',
  },
  {
    title: 'Coffee Shop Website',
    description: 'A website for a local coffee shop with menu and online orders.',
    image: '/coffee.jpeg',
    link: 'https://your-coffeeshop-link.vercel.app',
  },
  {
    title: 'Calculator',
    description: 'A simple calculator app with advanced functionalities.',
    image: '/calculator.jpeg',
    link: 'https://your-calculator-link.vercel.app',
  },
  {
    title: 'Jafferjees Clone',
    description: 'A clone of Jafferjees website with products and cart.',
    image: '/jafferjess.png',
    link: 'https://your-jafferjees-clone.vercel.app',
  },
  {
    title: 'Bakery Website',
    description: 'A bakery website with beautiful design and animations.',
    image: '/bakery.jpeg',
    link: 'https://your-bakery-link.vercel.app',
  },
];

export default function Portfolio() {
  return (
    <div className={styles.portfolioContainer}>
      <h1 className={styles.title}>My Portfolio</h1>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
