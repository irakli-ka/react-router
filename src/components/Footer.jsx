import styles from '../styles/Footer.module.css';

const Footer = () => {
  return <footer className={styles.footer}>&copy; {new Date().getFullYear()} Made For Front-End React 4-5 Assignment</footer>;
};

export default Footer;
