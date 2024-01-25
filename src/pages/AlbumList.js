import { createUseStyles } from 'react-jss';
import logo from '../logo.svg';
import { companyVersions } from '../data/companyData';
import UserCard from '../components/UserCard';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const styles = createUseStyles({
  albumList: {
    width: 'calc(100vw - 115px)',
    minHeight: 'calc(100vh - 100px)',
  },

  AlbumCard: {
    padding: "4px",
    margin: '4px'

  },

  albumsCard: {
    width: '300px',
    height: '150px',
    border: '2px solid black',
    borderRadius: '8px',
  },
  albumsFlexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  }



})


const AlbumList = () => {

  const classes = styles();
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
    <div className={classes.albumList}>
      <h2>Album List</h2>
      <div className={classes.albumsFlexContainer}>
        {albums.map(album => (
          <div className={classes.albumsCard} key={album.id}>
            <Link to={`/albums/${album.id}`}  >
              <h4>{album.title}</h4>
            </Link>
            <h5>Author: {users.find((user) => user.id == album.userId) ? users.find((user) => user.id == album.userId).name : "loading" }</h5>
          </div>
        ))}

      </div>
    </div>
  );
};

export default AlbumList;