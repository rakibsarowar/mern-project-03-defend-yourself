import React, { useContext} from 'react';
import { authContext } from '../../Providers/AuthProvider';

const UserHome = () => {
    const {user} = useContext(authContext)
    console.log(user)
    return (
        <div className='text-center'>
            <h2 className='text-bold text-5xl mt-6'>Welcome {user?.name}</h2>
        </div>
    );
};

export default UserHome;