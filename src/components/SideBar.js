import React from 'react';
import NavLabel from './NavLabel';
import "../styles/SideBar.css"; 

const SideBar = () => {
    return (
        <div className="sideBar">
            <div className="links">
                <NavLabel text="Posts" adress="/posts" fontSize='20px' />
                <NavLabel text="Albums" adress="/albums" fontSize='20px' />
                <NavLabel text="Users" adress="/users" fontSize='20px' />
            </div>
        </div>
    );
};

export default SideBar;