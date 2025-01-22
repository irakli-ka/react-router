import { useParams } from 'react-router';
import React from 'react';
import styles from '../styles/Profile.module.css';

const Profile = () => {
  const { name } = useParams();
  return (
    <div className={styles.profile}>
      <h1>Made By {name || 'Irakli'}</h1>
    </div>
  );
};

export default Profile;
