import React from 'react';
import routes from './config/routing/routes'
import Sidenav from './components/sidenav'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


function App() {
  return (
      <div className="bg-gray-100">
          <Router>
              <div className="relative min-h-screen md:flex">
                  <Sidenav />
                  <div className="p-10 text-2xl font-bold flex-1">
                      <Switch>
                          {routes.map((route) => (
                              <Route key={route.path} path={route.path} component={route.component} />
                          ))}
                      </Switch>
                  </div>
              </div>
          </Router>
      </div>
  );
}

export default App;
