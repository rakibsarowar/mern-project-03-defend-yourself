import { FaUserShield } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "react-query";
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Admin Successful !');


const AllUsers = () => {
    const {axiosSecure} = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                }
            })
    }

    const handleMakeInstructor = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                }
            })
    }



    return (
        <div className="w-full  bg-white border border-gray-300">
            <h3 className="text-3xl text-center font-semibold text-gray-700 my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full text-gray-700">

                    <thead>
                        <tr className="text-gray-700">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? 'admin' :
                                    <button onClick={() => {
                                        handleMakeAdmin(user)
                                        notify();
                                    }}
                                        className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button>
                                }</td>
                                <td> {user.role === 'instructor' ? 'instructor' :
                                    <button
                                        onClick={() => {
                                            handleMakeInstructor(user);
                                            notify();
                                        }}
                                        className="btn btn-ghost bg-red-600  text-white"><FaUserShield></FaUserShield>
                                    </button>
                                 }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <Toaster />
        </div>
    );
};

export default AllUsers;