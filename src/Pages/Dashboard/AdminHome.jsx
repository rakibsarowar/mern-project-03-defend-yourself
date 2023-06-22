import React, { useContext } from 'react';
import { authContext } from '../../Providers/AuthProvider';

const AdminHome = () => {
    const {user} = useContext(authContext)
    return (
        <div>
            <div className='text-center'>
            <h2 className='text-bold text-3xl mt-6'>Admin Home</h2>
            <h2 className='text-bold text-5xl mt-6'>Welcome {user?.displayName}</h2>
        </div>
        </div>
    );
};

export default AdminHome;