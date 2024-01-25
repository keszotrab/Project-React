import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import NavLabel from './NavLabel';


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
