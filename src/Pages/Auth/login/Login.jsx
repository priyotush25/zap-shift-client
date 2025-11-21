import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
    return (
        <div>
            <div>
                <h1 className="text-4xl font-black">Welcome Back</h1>
                <p className="font-medium">Login with ZapShift</p>
            </div>
            <form action="" className="min-w-sm space-y-4 mt-6">
                <div>
                    <label className="block text-gray-600 text-xl font-semibold mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-2 rounded-md border border-gray-400" />
                </div>
                <div>
                    <label className="block text-gray-600 text-xl font-semibold mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-2 rounded-md border border-gray-400" />
                </div>
                <div>
                    <Link to={"/"} className="block text-xl text-gray-500 font-medium mb-1 underline">Forget Password?</Link>
                </div>
                <div>
                    <input type="submit" className="w-full px-4 py-2 text-xl font-semibold rounded-md border border-gray-400 bg-primary" />
                </div>
                <div>
                    <label className="block text-xl text-gray-500 font-medium mb-1 ">Don’t have any account? <Link to={"/register"} className="text-amber-500">Register</Link> </label>
                </div>
                <div>
                    <label to={"/"} className="block text-xl text-gray-500 font-medium mb-1 text-center">Or</label>
                </div>
                <div>
                    <button className="w-full px-4 py-2 text-xl font-semibold rounded-md border border-gray-400 bg-gray-300 flex items-center justify-center gap-2">
                        <FcGoogle className="text-2xl" />
                        Login with Google
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;