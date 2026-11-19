import React from 'react';

const UserDetailsPage = async ({params}) => {
    const {userid} = await params;

    const data = await fetch(`http://localhost:5000/users/${userid}`);
    const userDetails = await data.json();
    console.log('User details:', userDetails);
    return (
        <div>
            <h2>User Details Page: {userid}</h2>
            <p>Name: {userDetails.name}</p>
            <p>Email: {userDetails.email}</p>
        </div>
    );
};

export default UserDetailsPage;