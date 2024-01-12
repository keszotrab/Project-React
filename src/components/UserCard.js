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
    },
    picture: {
        height: '100px',
        backgroundColor: 'rgb(172, 229, 181)',
        position: 'fixed',
        width: '100%',
        display: 'flex',
    }
})

function UserCard(props) {
    const classes = styles();


    return (
        <>
        <div className={classes.userCard}>
            <div className={classes.picture}>
            </div>
            <div>

            </div>
        </div>
        
        </>
            
    );
}

export default UserCard;
