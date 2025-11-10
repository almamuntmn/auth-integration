import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const PrivetRouts = ({children}) => {

    const {user, loading}= use(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }

    if(!user){
        return <Navigate to='/login' state={location.pathname}></Navigate>
    }



    return children;
};

export default PrivetRouts;