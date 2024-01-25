import { createUseStyles } from 'react-jss';
import logo from '../logo.svg';
import { companyVersions } from '../data/companyData';
import UserCard from '../components/UserCard';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const styles = createUseStyles({
  userList: {
    width: 'calc(100vw - 110px)',
    minHeight: 'calc(100vh - 100px)',
  },

  userCard:{
    padding: "5px",
    margin: '5px'

  },

  usersFlexContainer: {
    //backgroundColor: 'red',
    display: 'flex',
    //width: 'calc(100vw - 110px)',
    //height: 'calc(100vh - 100px)',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '10px', 
  }



})


const UserList = () => {

  const classes = styles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={classes.userList}>
      <h2>User List</h2>
      <div className={classes.usersFlexContainer}>
        {users.map(user => (
          <div className={classes.userCard}>
            <Link to={`/users/${user.id}`}  >
              <UserCard username={user.username} />
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
};

export default UserList;