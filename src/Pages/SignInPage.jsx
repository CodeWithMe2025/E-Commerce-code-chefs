import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { SingInSchema } from "@/validators/SingInSchema";
import { useState } from "react";
import LoadingSpinner from "../components/ui/LoadingSpinner";


const validCredentials = {
    email: '1@gmail.com',
    password: '123456'
}

const SignInPage = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(SingInSchema),
    });

    const onSubmit = (data) => {
        setIsLoading(true);

        setTimeout(() => {
            if (data.email === validCredentials.email && data.password === validCredentials.password) {
                setError(false);
                console.log("Form Submitted ✅");
            } else {
                setError(true);
            }

            setIsLoading(false);
        }, 2000);
    };



    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white p-5 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center text-gray-950 mb-6">Login</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-m font-medium text-gray-700 mb-1">Email</label>
                        <input
                            id="email"
                            {...register("email")}
                            className="w-full px-2 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                            placeholder="you@gmail.com"
                            disabled={isLoading}
                        />
                        {errors.email && <p className="py-2 text-sm font-medium text-red-500">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-m font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            {...register("password")}
                            className="w-full px-2 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                            placeholder="Enter you password"
                            disabled={isLoading}
                        />
                        {errors.password && <p className="py-2 text-sm font-medium text-red-500">{errors.password.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="flex justify-center align-middle text-sm w-full bg-black text-white py-2 rounded hover:bg-zinc-700 transition"
                        disabled={isLoading}
                    >
                        {isLoading ? <LoadingSpinner /> : "Sign In"}
                    </button>

                    <p className="text-sm text-center text-red-500 mt-4">
                        {error ? "Wrong E-mail or Password, Please try again" : ""}
                    </p>
                    <p className="text-sm text-center text-gray-500 mt-4">
                        Don't have an account?
                        <a href="#" className="underline ml-2 text-gray-950 hover:underline">Sign up</a>
                    </p>
                </form>
            </div>
        </div>

    )
}

export default SignInPage
