import React from 'react';
import NavLabel from './NavLabel';
import "../styles/SideBar.css"; 

const SideBar = () => {
    return (
        <div className="sideBar">
            <div className="links">
                <NavLabel text="Posts" adress="/posts"  />
                <NavLabel text="Albums" adress="/albums"  />
                <NavLabel text="Users" adress="/users"  />
            </div>
        </div>
    );
};

export default SideBar;