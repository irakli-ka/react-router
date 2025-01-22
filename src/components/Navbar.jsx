import styles from '../styles/Navbar.module.css';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navLink}>Home</Link>
      <Link to="/gallery" className={styles.navLink}>Gallery</Link>
      <Link to="/profile" className={styles.navLink}>Profile</Link>
    </nav>
  );
};

export default Navbar;
