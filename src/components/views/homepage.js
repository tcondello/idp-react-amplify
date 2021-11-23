import React from 'react';
import {Link} from "react-router-dom";

//THIS IS DIFFERENT FROM MY VIEWS DONT FORGET
function Homepage(props){
    return (
        <>
            <div className="bg-blue-200 py-6 flex items-center justify-center min-w-screen px-4">
                <p className="text-5xl text-gray-800">Pick Your Industry</p>
            </div>
            <div className="grid grid-cols-3 gap-x-2 gap-y-4 h-24 ">
                {props.routes.map(routes =>
                    <div key={routes.path} className="w-48 md:w-full transition duration-300 ease-in-out max-w-md py-4 px-8 bg-white rounded-lg my-5 shadow-sm transform hover:-translate-y-1 hover:shadow-xl ">
                        <div>
                            <h2 className="text-gray-800 text-3xl font-semibold">
                                {routes.name}
                            </h2>
                        </div>
                        <div className="flex justify-end mt-4">
                            <Link to={`/${routes.path}`}
                                  className="text-xl font-medium text-indigo-500">Explore Now</Link>
                        </div>
                    </div>

                )}
            </div>
        </>
    );
}

export default Homepage;

