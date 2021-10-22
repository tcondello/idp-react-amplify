import React from 'react';
import useCase_array from '../../config/useCases'

import {
    useLocation,
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


function UsecaseDetail(props) {
    const location = useLocation()
    const useCase = useCase_array.find(useCase => useCase.path === props.useCaseKey)
    if (!useCase){
        return null
    }
    return (
        <>
            <p>{useCase.name}</p>
        </>
    );
}

export default UsecaseDetail;
