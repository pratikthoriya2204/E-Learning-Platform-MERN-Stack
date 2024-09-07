import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import RootLayout from './RootLayout'
import Cards from './sidebarPages/Cards'
import Calender from './sidebarPages/Calender'
import Settings from './sidebarPages/Settings'

function SidebarRoute() {
    return (
        <>
        
            <RootLayout>
                <Routes>
                    <Route path="/" element={<Cards />} />
                    <Route path="/calender" element={<Calender />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </RootLayout>
        </>
    )
}

export default SidebarRoute
