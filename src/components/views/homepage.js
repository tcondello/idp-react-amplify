import React from 'react';
import routes from "../../config/routing/routes";
import {BrowserRouter as Router, Link} from "react-router-dom";

function Homepage(){
    return (
        <>
        <div className="bg-blue-200 py-6 flex items-center justify-center min-w-screen px-4">
            <p className="text-5xl text-gray-800">Pick Your Industry</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-4 h-24">
            {routes.map((route) =>
                <div key={route.path} className="bg-white rounded-lg shadow-2xl">
                    <div className="p-8">
                        {route.name}
                    </div>
                    <div className="flex space-x-2 items-center justify-center p-2">
                        <Link to={route.path}
                              key={route.path}
                        >
                        <button className="border border-red-600 hover:bg-red-600 text-red-600 hover:text-red-100 py-2 px-4 rounded-lg">
                                Explore Now
                        </button>
                        </Link>
                    </div>
                </div>

            )}
        </div>
        </>
    );
}

export default Homepage;

