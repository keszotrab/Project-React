import { createUseStyles } from 'react-jss';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import NavLabel from './NavLabel';



const styles = createUseStyles({
    todoCard: {
        width: '200px',
        height: '100px',
        border: '2px solid black',
        borderRadius: '8px',
    },
    todoTitle: {

    },
    todoStatus: {
        
    }

});

function TodoCard(props) {
    const classes = styles();

    let status = () => {
        {
            if (!props.status) {
                return "Do zrobienia";
            }
            else if (props.status) {
                return "Zrobione"
            }
        }
    }
    return (
        <>
            <div className={classes.todoCard}>
                <div className={classes.todoTitle} >To do: {props.title}</div>
                <div className={classes.status} >Status: {status()}</div>
            </div>
        </>
    );
}

export default TodoCard;
