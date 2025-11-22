import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../../hook/useAuth";
import Input from "../../../shared/field/Input";

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { registerUser } = useAuth();

    const handleRegister = (data) => {
        console.log(data.photo[0]);

        registerUser(data.email, data.password)
            .then(res => {
                console.log(res.user);
                toast.success("Registration successfully")
                reset();

            })
            .catch(result => console.log(result.message))

    }

    return (
        <div>
            <div>
                <h1 className="text-4xl font-black">Create an Account</h1>
                <p className="font-medium">Login with ZapShift</p>
            </div>
            <form
                onSubmit={handleSubmit(handleRegister)}
                className="min-w-sm space-y-4 mt-6"
            >
                {/* name input */}
                <div>
                    <Input
                        name="name"
                        label="Name"
                        input="text"
                        title="Enter your name"
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>

                {/* name input */}
                <div>
                    <Input
                        name="photo"
                        label="Photo"
                        input="file"
                        title="Enter your photo"
                        inputClass="bg-gradient-to-r from-gray-300 to-transparent cursor-pointer"
                        {...register("file", { required: "Photo is required" })}
                    />
                    {errors.file && <p className="text-red-500">{errors.file.message}</p>}
                </div>




                {/* email input */}
                <div>
                    <Input
                        label="Email"
                        input="email"
                        title="Enter your email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email address"
                            }
                        })}
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                {/* password input */}
                <div>
                    <Input
                        label="Password"
                        input="password"
                        title="Enter your password"
                        {...register("password", { required: "Password is required" })}
                    />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>
                <div>
                    <Input input="submit" inputClass="bg-primary cursor-pointer" />
                </div>
            </form>

            <div className="my-4">
                <label>
                    Already have an account?{" "}
                    <Link to="/login" className="text-amber-500">Login</Link>
                </label>
            </div>

            <div>
                <label className="block text-xl text-gray-500 font-medium mb-4 text-center">Or</label>
            </div>

            <div>
                <button className="w-full px-4 py-2 text-xl font-semibold rounded-md border border-gray-400 bg-gray-300 flex items-center justify-center gap-2">
                    <FcGoogle className="text-2xl" />
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default Register;
