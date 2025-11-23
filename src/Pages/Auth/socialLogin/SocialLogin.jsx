import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../../../hook/useAuth";

const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();



    const { signInGoogle } = useAuth();

    const handleSignInGoogle = () => {

        signInGoogle()
            .then(res => {
                console.log(res.user);
                navigate(location.state)
            })
            .catch(error => {
                console.log(error.message);
            })

    }

    return (
        <button onClick={handleSignInGoogle} className="w-full px-4 py-2 text-xl font-semibold rounded-md border border-gray-400 bg-gray-300 flex items-center justify-center gap-2">
            <FcGoogle className="text-2xl" />
            Login with Google
        </button>
    );
};

export default SocialLogin;