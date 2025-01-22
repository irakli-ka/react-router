import { useNavigate } from 'react-router';
import styles from '../styles/Home.module.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.hero}>
      <h1 className={styles.h1}>Welcome To The Home Page</h1>
      <button className={styles.button} onClick={() => navigate('/react-router/gallery')}>
        Go To Gallery
      </button>
    </div>
  );
};

export default Home;
