import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AlbumList.css';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const [users, setUsers] = useState([]);

  function createAlbumObject(id, title, author) {
    const albumObject = {};
    albumObject.id = id;
    albumObject.title = title;
    albumObject.author = author;
    return albumObject;
  }

  function generateAlbumsObject(userName) {
    const user = users.find((user) => user.name === userName);

    if (!user) {
      console.error('User not found');
      return [];
    }

    const userAlbums = albums
      .filter((album) => album.userId === user.id)
      .map((album) => createAlbumObject(album.id, album.title, user.name));

    return userAlbums;
  }

  useEffect(() => {
    const fetchAlbumData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error('Error fetching album data:', error.message);
      }
    };

    const fetchUserData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchUserData();
    fetchAlbumData();
  }, []);

  return (
    <div className="album-list">
      <h2>📚 Album List 📚</h2>
      <div className="albums-flex-container">
        {albums.map((album) => (
          <div className="albums-card" key={album.id}>
            <Link to={`/albums/${album.id}`}>
              <h4>🖼️ {album.title}</h4>
            </Link>
            <h5 className='autor'>📸 Author: {users.find((user) => user.id == album.userId) ? users.find((user) => user.id == album.userId).name : "loading" }</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;