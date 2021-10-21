import React from "react";
import {Link} from "react-router-dom";

function Sidenav(props) {
    return (
        <>
            {/*sidebar*/}
            <div
                className={"bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out"}>
                {/*logo*/}
                <a className="text-white flex items-center space-x-2 px-2" href="/">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                         fill="currentColor">
                        <path fill-rule="evenodd"
                              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                              clip-rule="evenodd"/>
                    </svg>
                    <span className="text-2xl font-extrabold">IDP</span>
                </a>
                <nav>
                    <Link to="/"
                          className="block py-2.5 px-4 hover:bg-blue-700 hover:text-white rounded transition duration-200">Home</Link>
                    {props.routes.filter(route => route.name !== 'Home').map(filteredRoute =>
                        <Link key={filteredRoute.path} to={filteredRoute.path}
                              className="block py-2.5 px-4 hover:bg-blue-700 hover:text-white rounded transition duration-200">{filteredRoute.name}</Link>
                    )}
                </nav>
            </div>
        </>
    )
}


export default Sidenav