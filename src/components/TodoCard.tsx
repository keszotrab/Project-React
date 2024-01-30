import React from 'react';
import { Link } from 'react-router-dom';
import NavLabel from './NavLabel';
import "../styles/ToDoCard.css"; 

interface TodoCardProps {
    title: string;
    status: boolean;
}



function TodoCard(props: TodoCardProps) {
    let status = () => {
        if (!props.status) {
            return "Do zrobienia";
        } else {
            return "Zrobione";
        }
    }

    return (
        <div className="todoCard">
            <div className="todoTitle"><span className='TODO'>❗ To do: ❗ </span><br/>{props.title}</div>
            <div className={props.status ? "todoStatus todoStatusDone" : "todoStatus todoStatusToDo"}>
                Status: {status()}
            </div>
        </div>
    );
}

export default TodoCard;