import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../../hook/useAuth";
import Input from "../../../shared/field/Input";
import SocialLogin from "../socialLogin/SocialLogin";

const Login = () => {

    const { loginUser } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const handleLogin = (data) => {
        console.log(data);

        loginUser(data.email, data.password)
            .then(res => {
                console.log(res.user);
                reset()
            })
            .catch(err => console.log(err.message))

    }


    return (
        <div>
            <div>
                <h1 className="text-4xl font-black">Welcome Back</h1>
                <p className="font-medium">Login with ZapShift</p>
            </div>
            <form onSubmit={handleSubmit(handleLogin)} className="min-w-sm space-y-4 mt-6">
                {/* email */}
                <div>
                    <Input
                        label={"Email"}
                        type={"email"}
                        title={"Enter your email"}
                        {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                {/* password */}
                <div>
                    <Input
                        label={"Password"}
                        type={"password"}
                        title={"Enter your password"}
                        {...register("password", { required: "Password is required" })}
                    />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>
                <div>
                    <Link to={"/"} className="block text-xl text-gray-500 font-medium mb-1 underline">Forget Password?</Link>
                </div>
                <div>
                    <Input
                        type={"submit"}
                        inputClass="bg-primary"
                    />
                </div>
            </form>


            <div>
                <label className="block mt-4 text-xl text-gray-500 font-medium mb-1 ">Don’t have any account? <Link to={"/register"} className="text-amber-500">Register</Link> </label>
            </div>
            <div>
                <label to={"/"} className="block text-xl text-gray-500 font-medium mb-1 text-center">Or</label>
            </div>
            <div>
                <SocialLogin />
            </div>

        </div>
    );
};

export default Login;