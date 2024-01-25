import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/UserList.css';
import UserCard from '../components/UserCard';

const UserList = () => {
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
    <div className="userList">
      <div className="usersFlexContainer">
        {users.map(user => (
       <div className="userCard" key={user.id}>
       <Link to={`/users/${user.id}`}>
       <UserCard className="UserC" username={<><span>{user.username}</span> <br /><span className="icon">🕵️‍♂️</span></>} />
       </Link>
     </div>
        ))}
      </div>
      <h2 class="header">🙍🏻‍♂️ User List 🙎</h2>
    </div>
  );
};

export default UserList;