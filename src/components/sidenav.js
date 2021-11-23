import React from "react";
import {Link} from "react-router-dom";

function Sidenav(props) {
    return (
        <>
            {/*sidebar*/}
            <div
                className="bg-blue-800 text-blue-100 w-16 md:w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform transition duration-200 ease-in-out md:relative md:translate-x-0 ">
                {/* TODO TRYING TO GET THIS THING TO SHOW WHEN THE NAVBAR IS SMALL
                    TODO split navbar into large and small components and render which one
                    prop of isExpanded
                */}
                <a className="block md:hidden text-white space-x-2 px-2" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </a>
                    {/*logo*/}
                    <a className=" hidden md:block text-white flex items-center space-x-2 px-2" href="/">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path fillRule="evenodd"
                                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                                  clipRule="evenodd"/>
                        </svg>
                        <span className="hidden md:block text-2xl font-extrabold">IDP</span>
                    </a>
                    <nav>
                        <Link to="/"
                              className="block py-2.5 px-4 hover:bg-blue-700 hover:text-white rounded transition duration-200">
                            <span className="hidden md:block ">Home</span>
                            <span className="block md:hidden " >H</span>
                        </Link>
                        {props.routes.map(routes =>
                            <Link key={routes.path} to={`/${routes.path}`}
                                  className="block py-2.5 px-4 hover:bg-blue-700 hover:text-white rounded transition duration-200">
                                <span className="hidden md:block ">{routes.name}</span>
                                <span className="block md:hidden ">{routes.icon}</span>
                            </Link>
                        )}
                    </nav>
            </div>
        </>
    )
}


export default Sidenav