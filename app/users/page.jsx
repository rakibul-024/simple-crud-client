import React from 'react';
import UserCardPage from '../../components/UserCard';

const UsersPage = async() => {
     const data = await fetch('http://localhost:5000/users');
     const users= await data.json();
     console.log('Data coming:',users);
    return (
        <div>
           <h2>Total users : {users.length}</h2> 
           <div>
            {
               users.map( user=> <UserCardPage key={user._id} user={user} > </UserCardPage>)
            };
           </div>
        </div>
    );
};

export default UsersPage;