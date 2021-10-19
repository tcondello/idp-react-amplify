import React from 'react';
import routes from '../config/routing/routes'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function Industrycard(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-4 h-24">
            <Router>
                {routes.map((route) =>
                <div key={route.path} className="bg-white rounded-lg shadow-2xl">
                    <div className="p-8">
                        {route.name}
                    </div>
                    <div className="flex space-x-2 items-center justify-center p-2">
                        <button className="border border-red-600 hover:bg-red-600 text-red-600 hover:text-red-100 py-2 px-4 rounded-lg">
                            <Link to={route.path}
                                  key={route.path}
                            >
                                Explore Now
                            </Link>
                        </button>
                    </div>
                </div>

                )}
                <div>
                    <Switch>
                        {routes.map((route) => (
                            <Route key={route.path} path={route.path} component={route.component} />
                        ))}
                    </Switch>
                </div>
            </Router>
        </div>

    );
}

export default Industrycard;
