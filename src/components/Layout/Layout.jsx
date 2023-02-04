import React, { useRef } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import SideBar from '../Sidebar/SideBar';
import "./Layout.scss"
import { motion } from 'framer-motion';
const Layout = () => {
    return (
        <div className='App'>
            <SideBar/>
            <div className='page'>

                    <Outlet/>
 
            </div>
        </div>
    );
}

export default Layout;
