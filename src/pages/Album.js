import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Album.css';  // Import arkusza stylów

const Album = () => {
  const { id } = useParams();

  const [albumData, setAlbumData] = useState(null);
  const [photosData, setPhotosData] = useState(null);

  useEffect(() => {
    const fetchAlbumData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
        const data = await response.json();
        setAlbumData(data);
      } catch (error) {
        console.error('Error fetching album data:', error);
      }
    };

    const fetchPhotoData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
        const data = await response.json();
        setPhotosData(data);
      } catch (error) {
        console.error('Error fetching photo data:', error);
      }
    };

    fetchAlbumData();
    fetchPhotoData();
  }, [id]);

  if (!albumData || !photosData) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className='container'>
          <h1>🏜️ {albumData.title} 🌋</h1>
          <h2></h2>
        </div>
        <div className="carousel-container"> 
          <Carousel>
            {photosData.map(photo => (
              <Carousel.Item key={photo.id}>
                <img
                  className="d-block w-100"
                  src={photo.url}
                  alt='Error Loading an image'
                />
                <Carousel.Caption>
                  <h3>{photo.title}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </>
    );
  }
}

export default Album;