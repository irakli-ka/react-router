import styles from '../styles/Navbar.module.css';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/react-router/" className={styles.navLink}>Home</Link>
      <Link to="/react-router/gallery" className={styles.navLink}>Gallery</Link>
      <Link to="/react-router/profile" className={styles.navLink}>Profile</Link>
    </nav>
  );
};

export default Navbar;
