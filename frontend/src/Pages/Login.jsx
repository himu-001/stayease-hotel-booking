
import React from "react";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="sm:w-[350px] w-full mx-auto mt-36 text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
        >
            <h1 className="text-3xl mt-10 font-medium">
                Login
            </h1>

            <p className="text-sm mt-2">
                Please sign in to continue
            </p>

            {/* Email */}
            <div className="flex items-center w-full mt-6 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">

                <Mail className="w-4 h-4 text-gray-500" />

                <input
                    type="email"
                    name="email"
                    placeholder="Email id"
                    className="border-none outline-none ring-0 w-full"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

            </div>

            {/* Password */}
            <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">

                <Lock className="w-4 h-4 text-gray-500" />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="border-none outline-none ring-0 w-full"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

            </div>

            {/* Login Button */}
            <button
                type="submit"
                className="mt-6 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
            >
                Login
            </button>

            {/* Signup */}
            <p className="text-gray-500 text-sm mt-3 mb-11">

                Don't have an account?{" "}

                <Link
                    to="/signup"
                    className="text-indigo-500 hover:underline"
                >
                    Sign up
                </Link>

            </p>

        </form>
    );
};

export default Login;
