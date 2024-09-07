import React, { useState } from 'react'
import room from '../../assets/class.svg'
import { LuPlus } from 'react-icons/lu'
import user from '../../assets/user.jpg'
import DropdownProfile from './DropdownProfile'
import AddClass from './sidebarPages/AddClass'
import { MdAdd } from 'react-icons/md'



function Navbar() {

    var name = localStorage.getItem('Name');

    const [openProfile, SetOpenprofile] = useState(false);

    const [showModal, setShowModel] = useState(false);
    return (
        <>
            <div className='navbar p-4 w-full h-15  bg-white ' >
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row'>
                        <img src={room} alt="" className='w-8 h-8 ' />
                        <h2 className='text-2xl ms-4 font-semibold'>E-Learning Platform </h2>
                    </div>
                    <div className='flex flex-row order-last gap-5 align-middle'>
                        <LuPlus onClick={() => setShowModel(true)} className='w-8 h-8  hover:bg-blue-100 rounded-full cursor-pointer' />
                        <h2 className='text-2xl capitalize'>{name} </h2>
                        <img src={user} alt="" className="w-8 h-8 border border-blue-700 ring-offset-1 ring-2 ring-blue-400  rounded-full cursor-pointer " onClick={() => SetOpenprofile((open) => !open)} />
                    </div>
                </div>
                <AddClass isVisible={showModal} onClose={() => setShowModel(false)} />
            </div>
            
            {
                openProfile && <DropdownProfile />
            }

        </>
    )
}

export default Navbar
