import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import Input from "../../../shared/field/Input";

const Register = () => {

    const { register, handleSubmit } = useForm()

    const handleRegister = () => {
        
    }

    return (
        <div>
            <div>
                <h1 className="text-4xl font-black">Create an Account</h1>
                <p className="font-medium">Login with ZapShift</p>
            </div>
            <form action="" className="min-w-sm space-y-4 mt-6" handleSubmit={handleRegister}>
                <div>
                    <Input name="name" label={"Name"} input={"text"} title={"Enter your name"} {...register("name")}></Input>
                </div>
                <div>
                    <Input label={"Email"} input={"email"} title={"Enter your email"} {...register("email")}></Input>
                </div>
                <div>
                    <Input label={"Password"} input={"password"} title={"Enter your password"} {...register("password")}></Input>
                </div>
                <div>
                    <Input input={"submit"} value={"Register"} inputClass="bg-primary"></Input>
                </div>
                <div>

                    <label>
                        Already have an account?
                        <Link to="/login" className="text-amber-500">
                            Login
                        </Link>
                    </label>

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