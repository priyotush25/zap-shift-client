import { Navigate } from 'react-router';
import useAuth from '../hook/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className='min-h-screen items-center justify-center'>
            <span className="loading loading-ring loading-xl"></span>
        </div>
    }



    if (!user) {
        return <Navigate to={"/login"} />
    }




    return children;
};

export default PrivateRoute;