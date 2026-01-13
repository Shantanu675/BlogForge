// import React, {useState} from "react";
// import authService from "../appwrite/auth";
// import {Link, useNavigate} from "react-router-dom"
// import{login} from "../store/authSlice"
// import {Button, Input, Logo} from './index'
// import { useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";

// function Signup() {
//     const navigate = useNavigate();
//     const [error, setError] = useState("");
//     const { register, handleSubmit } = useForm();

//     const create = async (data) => {
//         setError("");
//         try {
//             const account = await authService.createAccount(data);

//             if (account) {
//                 // 🔥 Ensure no session exists
//                 await authService.logout();

//                 navigate("/login");
//             }
//         } catch (error) {
//             setError(error.message);
//         }
//     };    
    
//     return (
//         <div className="flex items-center justify-center">
//             <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
//                 <div className="mb-2 flex justify-center">
//                     <span className="inline-block w-full max-w-[100px]">
//                         <Logo width="100%" />
//                     </span>
//                 </div>
//                 <h2 className="text-center text-2xl font-bold leading-tight text-blue-500">Sign up to create account</h2>
//                 <p className="mt-2 text-center text-base text-black/60">
//                     Already have an account?&nbsp;
//                     <Link
//                         to="/login"
//                         className="font-medium text-primary transition-all duration-200 hover:underline"
//                     >
//                         Sign In
//                     </Link>
//                 </p>
//                 {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
//                 <br/>
//                 <form onSubmit={handleSubmit(create)}>
//                     <div className='space-y-5'>
//                         <Input
//                         label="Full Name: "
//                         placeholder="Enter your full name"
//                         {...register("name", {
//                             required: true,
//                         })}
//                         />
//                         <Input
//                         label="Email: "
//                         placeholder="Enter your email"
//                         type="email"
//                         {...register("email", {
//                             required: true,
//                             validate: {
//                                 matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
//                                 "Email address must be a valid address",
//                             }
//                         })}
//                         />
//                         <Input
//                         label="Password: "
//                         type="password"
//                         placeholder="Enter your password"
//                         {...register("password", {
//                             required: true,})}
//                         />
//                         <Button type="submit" className="w-full">
//                             <b>Create Account</b>
//                         </Button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Signup

import React, {useState} from "react";
import authService from "../appwrite/auth";
import {Link, useNavigate} from "react-router-dom"
import{login} from "../store/authSlice"
import {Button, Input, Logo} from './index'
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const { register, handleSubmit } = useForm();
    
    const create = async (data) => {
        setError("");
        try {
            const account = await authService.createAccount(data);
            if (account) {
                // 🔥 Ensure no session exists
                await authService.logout();
                navigate("/login");
            }
        } catch (error) {
            setError(error.message);
        }
    };    
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="mx-auto w-full max-w-lg bg-white/80 backdrop-blur-lg rounded-3xl p-10 border-2 border-blue-100 shadow-2xl relative z-10 hover:shadow-blue-200 transition-all duration-500">
                {/* Logo Section */}
                <div className="mb-6 flex justify-center">
                    <div className="inline-block flex justify-center w-full max-w-[100px] transform transition-transform duration-300">
                        <Logo width="184px" />
                    </div>
                </div>
                
                
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                        Create Your Account
                    </h2>
                    <p className="text-gray-600 text-base">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200 hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg animate-shake">
                        <p className="text-red-700 text-sm font-medium">{error}</p>
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit(create)} className="space-y-6">
                    <div className="space-y-5">
                        <div className="transform transition-all duration-300 hover:scale-[1.02]">
                            <Input
                                label="Full Name: "
                                placeholder="Enter your full name"
                                {...register("name", {
                                    required: true,
                                })}
                            />
                        </div>

                        <div className="transform transition-all duration-300 hover:scale-[1.02]">
                            <Input
                                label="Email: "
                                placeholder="Enter your email"
                                type="email"
                                {...register("email", {
                                    required: true,
                                    validate: {
                                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                    }
                                })}
                            />
                        </div>

                        <div className="transform transition-all duration-300 hover:scale-[1.02]">
                            <Input
                                label="Password: "
                                type="password"
                                placeholder="Enter your password"
                                {...register("password", {
                                    required: true,
                                })}
                            />
                        </div>

                        <Button 
                            type="submit" 
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                        >
                            Create Account
                        </Button>
                    </div>
                </form>

                {/* Footer Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-center text-xs text-gray-500">
                        By signing up, you agree to our Terms of Service and Privacy Policy
                    </p>
                </div>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                .animate-shake {
                    animation: shake 0.3s ease-in-out;
                }
            `}</style>
        </div>
    )
}

export default Signup