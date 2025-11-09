import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

const userInfo ={
    name: 'John Doe',
    email: '1YwY0@example.com'
}

    return (
<AuthContext value={userInfo}>
    {children}
</AuthContext>
    );
};

export default AuthProvider;