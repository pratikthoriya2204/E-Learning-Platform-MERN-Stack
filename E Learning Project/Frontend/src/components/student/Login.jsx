import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
    let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userData = {
            email : data.email,
            password : data.password
        }

        const response = await fetch("http://localhost:5000/api/auth/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        const json = await response.json();
        console.log(json);
        if (json.Success) {
            localStorage.setItem('StudentAuthToken', json.studentAuthToken);
            localStorage.setItem('Name',json.name);
            navigate('/');
        } else {
            console.log("Login Error...");
        }
    }
    return (
        <>
            <div className="">
                <div className="formPage">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                        <h2 className="formName">Sign In</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Username :</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" autoComplete="email"  className="formInput" {...register("email", { required: true })} />
                                    {errors.email && <span className='text-sm text-red-500'>Please Fill Username Feild ***</span>}
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password :</label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" autoComplete="current-password"  className="formInput" {...register("password", { required: true })} />
                                    {errors.password && <span className='text-sm text-red-500'>Please Fill password Feild ***</span>}
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="formButton">Sign In</button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Don't have an Account...?
                            <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-red-400 mx-2 ">Register Here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
