import React from 'react';
import industries_array from "./config/industries"
import Homepage from "./components/views/homepage";
import Sidenav from './components/sidenav'
import UseCaseCards from "./components/views/useCase_cards";


import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import UsecaseDetailHealthcare from "./components/views/usecaseDetailHealthcare";


function App() {
  return (
      <div className="bg-gray-100">
          <Router>
              <div className="relative min-h-screen md:flex">
                  <Sidenav routes={industries_array}/>
                  <div className="p-10 text-2xl font-bold flex-1">
                      <Switch>
                          <Route exact path="/" >
                              <Homepage routes={industries_array}/>
                              {/*<UsecaseDetailHealthcare></UsecaseDetailHealthcare>*/}
                          </Route>
                          {industries_array.map((route) => (
                              <Route key={route.path} path={route.path}>
                                  <UseCaseCards name={route.name}/>
                              </Route>
                          ))}
                      </Switch>
                  </div>
              </div>
          </Router>
      </div>
  );
}

export default App;
