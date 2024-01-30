import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/UserList.css';
import UserCard from '../components/UserCard';

interface User {
  id: number;
  name: string;
  username: string;
  //email: string;
  //address: Address;
  //phone: string;
  //website: string;
  //company: Company; 
}

const UserList = () => {
  const [users, setUsers] = useState<User[] | null>(null);

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
        console.error('Error fetching data:', /*error.message*/);
      }
    };

    fetchData();
  }, []);
  if (users != null) {
    return (

      <div className="userList">
        <h2 className="header">🙍🏻‍♂️ User List 🙎</h2>
        <div className="usersFlexContainer">
          {users.map(user => (
            <div className="userCard" key={user.id}>
              <Link to={`/users/${user.id}`}>
                <UserCard username={user.username} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
  else { return (<>Something's loading uwu</>) }
};

export default UserList;