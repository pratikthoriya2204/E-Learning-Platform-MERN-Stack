import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import classContext from '../../../context/class/classContext';


function AddClass({ isVisible, onClose }) {

    let navigate = useNavigate();
    const context = useContext(classContext);
    const {addClass} = context;
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [myClass,setMyClass] = useState({name:"",description:"",subject:""})
    
    const onAdd = (data) => {
        const myData = {
            name: data.name,
            subject: data.subject,
            description: data.description,
        }
        const {name,description,subject} = myData;
        addClass(name,description,subject);
        reset();
        onClose();
        // console.log(myData);
    }
    if (!isVisible) return null;
    return (
        <>
            <div style={{ zIndex: "1" }} className=' fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center '>
                <div className='w-[450px] mx-5 flex flex-col'>
                    <div className='bg-white rounded-xl p-5'>
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" onSubmit={handleSubmit(onAdd)}>
                                <div className='flex flex-row w-full justify-between text-center'>
                                    <h3 className='text-2xl text-slate-800 font-semibold'>Create Class</h3>
                                    <RxCross2 className='text-black bg-transparent hover:bg-blue-100 hover:text-gray-900 rounded-lg h-6 w-7 ms-auto inline-flex justify-center items-center cursor-pointer' onClick={() => onClose()} />
                                </div>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                    <div className="mt-2">
                                        <input type="text" id="name" name="name" autoComplete='on' className="formInput" {...register("name", { required: true })} />
                                        {errors.name && <span className='text-sm text-red-500'>Class name is Required ***</span>}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">Subject</label>
                                    <div className="mt-2">
                                        <input type="subject" id="subject" name="subject" autoComplete='on' className="formInput" {...register("subject", { required: true })} />
                                        {errors.subject && <span className='text-sm text-red-500'>Class subject is Required ***</span>}
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                                    </div>
                                    <div className="mt-2">
                                        <input type="text" id="description" name="description" autoComplete='on' className="formInput" {...register("description", { required: true })} />
                                        {errors.description && <span className='text-sm text-red-500'>Class description is Required ***</span>}
                                    </div>
                                </div>


                                <div className='flex flex-row justify-end'>
                                    <button type="submit" className="text-indigo-600 place-self-end text-xl">Create</button>
                                    <button className="text-slate-600 place-self-end ms-5 text-xl" onClick={() => onClose()}>Close</button>
                                </div>
                            </form>


                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default AddClass
