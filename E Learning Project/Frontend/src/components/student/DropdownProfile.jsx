import React from 'react'
import { FaUserTie } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

function DropdownProfile() {
    let navigate = useNavigate();
    const handleLogout = ()=>{
        localStorage.removeItem('StudentAuthToken');
        localStorage.removeItem('Name');

        navigate('/login');
    }
    return (
        <>
            <div className='flex flex-col dropdownProfile'>
                <ul className='flex flex-col gap-4'>
                    <div className='flex flex-row justify-items-start cursor-pointer hover:text-blue-800'>
                    <FaUserTie size={20} /><li className='ms-2 text-[15px] font-bold'>Profile</li>
                    </div>
                    <hr />
                    <div className='flex flex-row justify-items-start cursor-pointer hover:text-blue-800' onClick={handleLogout} >
                    <FiLogOut size={20} /><li className='ms-2 text-[15px] font-bold'>Sign out</li>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default DropdownProfile
