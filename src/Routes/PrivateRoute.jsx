import { Navigate, useLocation } from 'react-router';
import useAuth from '../hook/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();


    if (loading) {
        return <div className='flex-1  flex items-center justify-center'>
            <span className="loading loading-ring loading-xl"></span>
        </div>
    }



    if (!user) {
        return <Navigate state={location.pathname} to={"/login"} />
    }




    return children;
};

export default PrivateRoute;