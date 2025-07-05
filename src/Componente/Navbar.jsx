import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { MapPin } from 'lucide-react'
import { CgClose } from 'react-icons/cg';
import { FaCaretDown } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router'

const Navbar = ({ location, getlocation, opendropdown, setOpendropdown }) => {
    const toggleDropdown = () => {
        setOpendropdown(!opendropdown);
    }
    return (
        <div className='bg-white py-3 shadow-2xl'>
            <div className='max-w-6xl mx-auto flex justify-between items-center'>
                {/* logo section */}
                <div className='flex items-center gap-7'>
                    <Link to={'/'}><h1 className='font-bold text-3xl'><span className='text-red-500 font-serif'>Z</span>aptro</h1></Link>
                    <div className='flex gap-1 cursor-pointer trxt-gray-700 items-center'>
                        <MapPin className='text-red-500' />
                        <span className='font-semibold'>{location ? <div className='-space-y-2'>
                            <span className='text-red-500'>{location?.city}</span>, {location?.state} <br />
                            <span className='text-gray-500'>{location?.country}</span>
                        </div> : "Add Address"}</span>
                        <FaCaretDown onClick={toggleDropdown} />

                    </div>
                    {
                        opendropdown ? <div className='w-[250px] h-max shadow-2xl bg-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md'>
                            <h1 className='font-semibold mb-4 text-xl flex justify-between'>Change Location <span onClick={toggleDropdown}><CgClose /></span></h1>
                            <button onClick={getlocation} className='bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-400'>Detect my Location</button>
                        </div> : null
                    }
                </div>
                {/* menu section */}
                <nav className='flex gap-7 items-center'>
                    <ul className='flex gap-7 font-semibold text-xl'>
                        <NavLink to={'/'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}><li>Home</li></NavLink>
                        <NavLink to={'/products'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}><li>Products</li></NavLink>
                        <NavLink to={'/about'} className={({ isActive }) => `${isActive ? "border-b-3 transtion-all border-red-500" : "text-black"} cursor-pointer`}><li>About</li></NavLink>
                        <NavLink to={'/contact'} className={({ isActive }) => `${isActive ? "border-b-3 transtion-all border-red-500" : "text-black"} cursor-pointer`}><li>Contact</li></NavLink>

                    </ul>
                    <Link to={'/cart'} className='relative'>
                        <IoCartOutline className='w-7 h-7' />
                        <span className='bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white'>0</span>
                    </Link>
                    <div>
                        <SignedOut>
                            <SignInButton className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer" />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
