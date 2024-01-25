import { createUseStyles } from 'react-jss';
import { companyVersions } from '../data/companyData';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TodoCard from '../components/TodoCard';

const company = companyVersions.companyPL;

const styles = createUseStyles({
  navBar: {
    height: '100px',
    backgroundColor: 'rgb(172, 229, 181)',
    position: 'fixed',
    width: '100%',
  },
  todosContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    textAlign: 'center',
  },
  userInfo: {
    color: 'white',
    marginLeft:'35%',
  },
  boldText: {
    fontWeight: 'bold',
    color:'rgb(150, 106, 106)',
    textDecoration:'underline',
  },
});

const User = () => {
  const classes = styles();
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
          <h1 className={classes.userInfo}>{userData.name}</h1>
          <p className={classes.userInfo}>👤 Username: {userData.username}</p>
          <p className={classes.userInfo}>📧 Email: {userData.email}</p>
          <p className={classes.userInfo}>🚕 Address: {userData.address.street}, {userData.address.suite}, {userData.address.city}, {userData.address.zipcode}</p>
          <p className={classes.userInfo}>📞 Phone: {userData.phone}</p>
          <p className={classes.userInfo}>🌐 Website: {userData.website}</p>
          <p className={classes.userInfo}>🏣 Company: {userData.company.name}</p>
          <p className={classes.userInfo}>🔣 Catch Phrase: {userData.company.catchPhrase}</p>
          <p className={classes.userInfo}>💰 Business: {userData.company.bs}</p>
        </div>
        <div>
          Loading...
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <h1 className={classes.userInfo}>{userData.name}</h1>
        <div className={classes.userInfo}>
          <p>
          👤 <span className={classes.boldText}>Username:</span> {userData.username}
          </p>
          <p>
          📧 <span className={classes.boldText}>Email:</span> {userData.email}
          </p>
          <p>
          🚕 <span className={classes.boldText}>Address:</span> {userData.address.street}, {userData.address.suite}, {userData.address.city}, {userData.address.zipcode}
          </p>
          <p>
          📞 <span className={classes.boldText}>Phone:</span> {userData.phone}
          </p>
          <p>
          🌐 <span className={classes.boldText}>Website:</span> {userData.website}
          </p>
          <p>
          🏣 <span className={classes.boldText}>Company:</span> {userData.company.name}
          </p>
          <p>
          🔣 <span className={classes.boldText}>Catch Phrase:</span> {userData.company.catchPhrase}
          </p>
          <p>
          💰 <span className={classes.boldText}>Business:</span> {userData.company.bs}
          </p>
        </div>
      </div>
      <div className={classes.todosContainer}>
        {todoData.map(todo => (
          <div className={classes.userCard} key={todo.id}>
            <TodoCard title={todo.title} status={todo.completed} />
          </div>
        ))}
      </div>
    </>
  );
}

export default User;