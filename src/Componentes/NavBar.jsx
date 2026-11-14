import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../Assets/Logo.png';
import { navItems } from '../Assets/constantes';
import { NavLink } from 'react-router-dom';
const NavBar = () => {  
    const namePage = "<LencDev/>"
    
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/800">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2 rounded-full" src={logo} alt="logo" />
                        <span className="text-lg tacking-tight">{namePage}</span>
                    </div>
                    <div className='hidden lg:flex ml-14  space-x-12'>
                        {navItems.map((item, index) =>(
                            <NavLink key={index} to={item.href}>{item.label}</NavLink>
                        ))}
                    </div> 
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="https://www.linkedin.com/in/leonel-lencinas-345091278/" className='bg-gradient-to-r from-indigo-500 to-sky-500 py-2 px-3 rounded-md'>
                            LinkedIn
                        </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <>
                             {navItems.map((item, index) =>(
                            <NavLink key={index} className='py-4'to={item.href}> {item.label} </NavLink>
                        ))}
                        </>
                        <div className="flex space-x-6 mt-5">
                             <a href="https://www.linkedin.com/in/leonel-lencinas-345091278/" className='bg-gradient-to-r from-indigo-500 to-sky-500 py-2 px-3 rounded-md'>LinkedIn</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
export default NavBar;