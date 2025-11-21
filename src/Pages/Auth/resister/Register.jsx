import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Register = () => {
    return (
        <div>
            <div>
                <h1 className="text-4xl font-black">Create an Account</h1>
                <p className="font-medium">Login with ZapShift</p>
            </div>
            <form action="" className="min-w-sm space-y-4 mt-6">
                <div>
                    <label className="block text-gray-600 text-xl font-semibold mb-1">Name</label>
                    <input type="text" placeholder="Enter your name" className="w-full px-4 py-2 rounded-md border border-gray-400" />
                </div>
                <div>
                    <label className="block text-gray-600 text-xl font-semibold mb-1">Email</label>
                    <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-md border border-gray-400" />
                </div>
                <div>
                    <label className="block text-gray-600 text-xl font-semibold mb-1">Password</label>
                    <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 rounded-md border border-gray-400" />
                </div>
                <div>
                    <input type="submit" value={"Register"} className="w-full px-4 py-2 text-xl font-semibold rounded-md border border-gray-400 bg-primary" />
                </div>
                <div>
                    <label className="block text-xl text-gray-500 font-medium mb-1 ">Already have an account?  <Link to={"/login"} className="text-amber-500">Login</Link> </label>
                </div>
                <div>
                    <label className="block text-xl text-gray-500 font-medium mb-1 text-center">Or</label>
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

export default Register;