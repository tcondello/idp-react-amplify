import React from 'react';
import useCase_array from '../../config/useCases'
import {Link, useParams, useRouteMatch, Switch, Route} from "react-router-dom";
import UsecaseExample from "./usecaseExample";

function UseCaseCards() {
    let { path } = useRouteMatch();
    let { industryUrl } = useParams();
    const useCases = useCase_array.filter(s => s.tag.includes(industryUrl))

    if (!useCases) return null;

    return (
        <>
            <div className="bg-blue-200 py-6 flex items-center justify-center min-w-screen px-4">
                <p className="text-5xl text-gray-800 capitalize">{industryUrl}</p>
            </div>
            <Switch>
                <Route exact path={path}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-4 h-24">
                        {useCases.map(UC =>
                            <div key={UC.name} className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-5">
                                <div>
                                    <h2 className="text-gray-800 text-3xl font-semibold">
                                        {UC.name}
                                    </h2>
                                    <p className="mt-2 text-gray-600">
                                        {UC.description}
                                    </p>
                                </div>
                                <div className="flex justify-end mt-4">
                                    <Link to={`/${industryUrl}/${UC.path}`}
                                          className="text-xl font-medium text-indigo-500">See it in Action</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </Route>
                <Route path={`${path}/:useCaseUrl`}>
                    <UsecaseExample />
                </Route>
            </Switch>

        </>
    );
}

export default UseCaseCards;
