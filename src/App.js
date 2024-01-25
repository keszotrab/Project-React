import { createUseStyles } from 'react-jss';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';
import Home from './pages/Home';
import SideBar from './components/SideBar';
import UserList from './pages/UserList';
import User from './pages/User';
import AlbumList from './pages/AlbumList';
import Album from './pages/Album';


const styles = createUseStyles({
  content : {
      top: '100px',
      position: 'absolute',
      left: '100px',
      backgroundColor: 'rgb(100, 100, 100)',
  },
//width = 100% - 100px maybe ?


});

function App() { 
  const classes = styles();


  return (
    <>
      <NavBar />
      <SideBar/>
      <div className={classes.content}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} /> {/*Default website aka Home*/}
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<User/>} />
          <Route path="/albums" element={<AlbumList />} />
          <Route path="/albums/:id" element={<Album/>} />
        </Routes>
      </div>
    </>
  );

}

export default App;
