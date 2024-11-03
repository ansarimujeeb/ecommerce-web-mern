import React, { useState } from 'react'
import logo from '../assest/logo.png';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => {
        setShowMenu ( preve => !preve)
    }
    return (
        <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white z-50">
            {/* desktop */}
            <div className='flex items-center h-full justify-between'>
                <Link to={""}>
                    <div className='h-10'>
                        <img src={logo} className='h-full' alt='logo' />
                    </div>
                </Link>
                <div className="flex items-center gap-4 md:gap-7">
                    <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
                        <Link to={""}>Home</Link>
                        <Link to={"menu"}>Menu</Link>
                        <Link to={"about"}>About</Link>
                        <Link to={"contact"}>Contact</Link>
                    </nav>
                    <div className="text-2xl text-slate-600 relative">
                        {/* <Link to={"cart"}> */}
                        <BsCartFill />
                        <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
                            3
                        </div>
                        {/* </Link> */}
                    </div>
                    <div className="text-slate-600" onClick={handleShowMenu}>
                        <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
                            <FaRegUserCircle />
                        </div>
                        {showMenu && (
                            <div className="absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                                <Link to={"new-product"} className="whitespace-nowrap cursor-pointer px-2">New Product</Link>
                                <Link to={"login"} className="whitespace-nowrap cursor-pointer px-2">Login</Link>
                                <p className="cursor-pointer text-white px-2 bg-red-500">Logout</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile */}
        </header>
    )
}
