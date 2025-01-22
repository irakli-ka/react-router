import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Gallery.module.css';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=4')
      .then((response) => {
        const updatedPhotos = response.data.map((photo) => ({
          ...photo,
          //უბრალოდ სილამაზისთვის 
          // https://dummyjson.com/image/400x200?type=webp&text=I+am+a+webp+image -ის მაგივრად ჩავსვი
          //id უბრალოდ ცვალებადი რიცხვის როლს ასრულებს რომ სხვადასხვა რანდომული ფოტოები ჩაიტვირთოს
          url: `https://picsum.photos/400/200?random=${photo.id}`,
        }));
        setPhotos(updatedPhotos);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.gallery}>
      {photos.map((photo) => (
        <div className={styles.card}>
          <img src={photo.url} alt={photo.title} className={styles.image} />
          <p className={styles.title}>{photo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;