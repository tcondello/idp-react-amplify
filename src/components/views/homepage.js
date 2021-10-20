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
                {routes.filter(route => route.name != 'Home').map(filteredRoute =>
                    <div key={filteredRoute.path} className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                        <div>
                            <h2 className="text-gray-800 text-3xl font-semibold">
                                {filteredRoute.name}
                            </h2>
                        </div>
                        <div className="flex justify-end mt-4">
                            <a href={filteredRoute.path} className="text-xl font-medium text-indigo-500">
                                Explore Now
                            </a>
                        </div>
                    </div>

                )}
            </div>
        </>
    );
}

export default Homepage;

