import { createUseStyles } from 'react-jss';
import logo from '../logo.svg';
import { companyVersions } from '../data/companyData';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { propTypes } from 'react-bootstrap/esm/Image';
import TodoCard from '../components/TodoCard';

//import './App.css';
// bacground color 172, 229, 181, 1
const company = companyVersions.companyPL;


const styles = createUseStyles({
    navBar: {
        height: '100px',
        backgroundColor: 'rgb(172, 229, 181)',
        position: 'fixed',
        width: '100%'
    }

})


const User = () => {
    const classes = styles()
    const { id } = useParams();

    const [userData, setUserData] = useState(null);
    const [todoData, setTodoData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        const fetchTodoData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
                const todoData = await response.json();
                setTodoData(todoData);
            } catch (error) {
                console.error('Error fetching todo data:', error);
            }
        };



        fetchUserData();
        fetchTodoData();
    }, [id]);

    if (!userData) {
        return <div>Loading...</div>;
    }
    if (!todoData) {
        return (
            <>
                <div>
                    <h1>{userData.name}</h1>
                    <p>Username: {userData.username}</p>
                    <p>Email: {userData.email}</p>
                    <p>Address: {userData.address.street}, {userData.address.suite}, {userData.address.city}, {userData.address.zipcode}</p>
                    <p>Phone: {userData.phone}</p>
                    <p>Website: {userData.website}</p>
                    <p>Company: {userData.company.name}</p>
                    <p>Catch Phrase: {userData.company.catchPhrase}</p>
                    <p>Business: {userData.company.bs}</p>
                </div>
                <div>
                    Loading...
                </div>
            </>
        );
    };

    return (
        <>
            <div>
                <h1>{userData.name}</h1>
                <p>Username: {userData.username}</p>
                <p>Email: {userData.email}</p>
                <p>Address: {userData.address.street}, {userData.address.suite}, {userData.address.city}, {userData.address.zipcode}</p>
                <p>Phone: {userData.phone}</p>
                <p>Website: {userData.website}</p>
                <p>Company: {userData.company.name}</p>
                <p>Catch Phrase: {userData.company.catchPhrase}</p>
                <p>Business: {userData.company.bs}</p>
            </div>
            <div className={classes.todosContainer}>
                {todoData.map(todo => (
                    <div className={classes.userCard}>
                            <TodoCard title={todo.title} status={todo.completed}/>
                    </div>
                ))}
            </div>
        </>
    );
}

export default User;







