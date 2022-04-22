import { useState } from 'react';
import Link from 'next/link';
import ICON from '../../public/icon.png'

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <div className='container mx-auto' >

            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 border-b-2">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="https://flowbite.com" className="flex items-center">
                        <img src={ICON.src} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span className="text-xl font-semibold whitespace-nowrap ms-madi-font uppercase" >Shop</span>
                    </a>
                    <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setMobileMenu(mobileMenu ? false : true)}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className={`${mobileMenu ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <Link href='/'>
                                    <a className="block py-2 pr-4 pl-3 text-white bg-red-500 rounded md:bg-transparent md:text-red-500 md:p-0 font-bold" aria-current="page">Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/about'>
                                    <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0">About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/store'>
                                    <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0">Store</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/card'>
                                    <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0">Card</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/contact'>
                                    <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0">Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;