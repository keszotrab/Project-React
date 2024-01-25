import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/NavLabel.css"; 

const NavLabel = (props) => {
    return (
        <div className="coolLabel">
            <Link to={props.adress} className="noUnderline">  
                {props.text}
            </Link>
        </div>
    );
};

export default NavLabel;