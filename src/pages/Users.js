import { createUseStyles } from 'react-jss';
import { companyVersions } from '../data/companyData';
import { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';

const styles = createUseStyles({
    logo: {
        width: '100px',
        height: '100px',
    },
    navBar: {
        height: '100px',
        backgroundColor: 'rgb(172, 229, 181)',
        position: 'fixed',
        width: '100%'
    }



})



function Users() {
    const classes = styles();
    const [usersList, setUsersList] = useState(null);



    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
            setUsersList(response);
        }
        catch
        {

        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="AboutContet">
            {usersList.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
}


export default Users;
