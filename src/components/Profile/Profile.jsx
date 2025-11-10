import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Profile = () => {

    const {user} = use(AuthContext);

    return (
        <div className='max-w-sm mx-auto'>
            <h2>This is Profile</h2>
            <p>Name: {user.displayName}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default Profile;