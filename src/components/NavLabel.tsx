import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/NavLabel.css";

interface NavLabelProps {
    text: string;
    adress: string;
    className?: string;
  }
  

const NavLabel: React.FC<NavLabelProps> = (props) => {
  return (
    <div className={`coolLabel ${props.className}`}>
      <Link to={props.adress} className="noUnderline">
        {props.text}
      </Link>
    </div>
  );
};

export default NavLabel;
