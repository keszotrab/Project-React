import { createUseStyles } from 'react-jss';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import NavLabel from './NavLabel';
//import './App.css';
// bacground color 172, 229, 181, 1


const styles = createUseStyles({
    userCard: {
        width: '200px',
        height: '100px',
        border: '2px solid black',  
        borderRadius: '8px',      
    }
});

function UserCard(props) {
    const classes = styles();


    return (
        <>
        <div className={classes.userCard}>
            {props.username}
        </div>
        
        </>
            
    );
}

export default UserCard;
