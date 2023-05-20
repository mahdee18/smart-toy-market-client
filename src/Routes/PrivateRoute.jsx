import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <progress className="progress progress-info w-56" value="1000" max="100"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate replace state={{from:location}} to='/login'></Navigate>
};

export default PrivateRoute;