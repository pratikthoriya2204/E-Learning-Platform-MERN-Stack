import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Register() {
    let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    

    const onSubmit = async (data) => {
        const userData = {
            name : data.name,
            email : data.email,
            password : data.password
        }

        const response = await fetch("http://localhost:5000/api/auth/createstudent", {
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
            localStorage.setItem('Name',userData.name);
            navigate('/');
        } else {
            console.log("signUp Error...");
        }
    }

    
    return (
        <>
            <div className="">
                <div className="formPage">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="formName">Sign Up</h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                <div className="mt-2">
                                    <input type="text" id="name" name="name" className="formInput" {...register("name", { required: true })} />
                                    {errors.name && <span className='text-sm text-red-500'>fullname is Required ***</span>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input type="email" id="email" name="email"  autoComplete="email" className="formInput" {...register("email", { required: true })} />
                                    {errors.email && <span className='text-sm text-red-500'>email is Required ***</span>}
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                </div>
                                <div className="mt-2">
                                    <input type="password" id="password" name="password" autoComplete="current-password" className="formInput" {...register("password", { required: true })} />
                                    {errors.password && <span className='text-sm text-red-500'>password is Required ***</span>}
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="formButton">Sign Up</button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            All ready have an Account..?
                            <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-red-400 mx-2 ">Login Here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
