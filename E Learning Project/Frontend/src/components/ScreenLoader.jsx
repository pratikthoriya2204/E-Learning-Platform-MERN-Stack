import React from 'react'
import HashLoader from "react-spinners/HashLoader";

function ScreenLoader() {
    return (
        <>
            <div className='flex items-center justify-center w-full h-screen' >
                <HashLoader
                    color="#1e26e0"
                    size={150}
                />
            </div>
        </>
    )
}

export default ScreenLoader
