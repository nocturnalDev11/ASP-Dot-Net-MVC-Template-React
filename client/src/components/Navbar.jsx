import React from 'react'
import NavLink from './ui/NavLink'
import { routes } from '../router/routes'
import ButtonLink from './ui/ButtonLink'
import reactLogo from '../assets/react.svg'

const NavBar = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={reactLogo} className="h-8 mr-3" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ASP.NET CRUD</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <ButtonLink
                        to="/login"
                        className="bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        Login
                    </ButtonLink>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {routes
                            .filter((route) => route.showInNav)
                            .map(({ path, name }) => (
                                <li key={path}>
                                <NavLink to={path}>{name}</NavLink>
                                </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
