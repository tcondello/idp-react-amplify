import React from 'react';
import industries_array from "./config/industries"
import Homepage from "./components/views/homepage";
import Sidenav from './components/sidenav'
import UseCaseCards from "./components/views/industry_cards";
import '@aws-amplify/ui-react/styles.css'
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
                  <Sidenav routes={industries_array}/>
                  {/* Content below */}
                  <div className="p-6 pl-20 text-2xl font-bold flex-1">
                      <Switch>
                          <Route exact path="/" >
                              <Homepage routes={industries_array}/>
                          </Route>
                          <Route path="/:industryUrl" children={<UseCaseCards />} />
                      </Switch>
                  </div>
              </div>
          </Router>
      </div>
  );
}

export default (App);
