import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SingInSchema } from "./scema";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";

const validCredentials = {
  email: "1@gmail.com",
  password: "123456",
};

export default function LoginForm() {
  const navgit = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

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
      // Simulate async login
      if (
        data.email === validCredentials.email &&
        data.password === validCredentials.password
      ) {
        setError(false);
        navgit("/");
        console.log("Form Submitted");
      } else {
        setError(true);
      }
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-zinc-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm border border-zinc-100">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/src/assets/svg/SHOP.CO.svg"
            alt="Logo"
            className="w-16 h-16 mb-2"
          />
          <h2 className="text-2xl font-bold text-gray-950 mb-1">
            Sign in to your account
          </h2>
          <p className="text-sm text-gray-500">
            Welcome back! Please enter your details.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register("email")}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/60 transition ${
                errors.email ? "border-red-400" : "border-zinc-200"
              }`}
              placeholder="you@gmail.com"
              disabled={isLoading}
            />
            {errors.email && (
              <p className="py-1 text-xs font-medium text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password")}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/60 transition ${
                errors.password ? "border-red-400" : "border-zinc-200"
              }`}
              placeholder="Enter your password"
              disabled={isLoading}
            />
            {errors.password && (
              <p className="py-1 text-xs font-medium text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full flex justify-center items-center gap-2"
            disabled={isLoading}
          >
            {isLoading ? <Loader /> : "Sign In"}
          </Button>
          {error && (
            <p className="text-sm text-center text-red-500 mt-2">
              Wrong E-mail or Password, Please try again
            </p>
          )}
        </form>
        <p className="text-sm text-center text-gray-500 mt-6">
          Don't have an account?
          <Link
            to="/signup"
            className="underline ml-2 text-gray-950 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
