import { Navigate, useLocation } from "react-router";
import useAdmin from "../hooks/useAdmin";
import { authContext } from "../Providers/AuthProvider";
import { useContext } from "react";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(authContext)
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;