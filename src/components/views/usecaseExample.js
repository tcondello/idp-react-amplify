import React from 'react';
import {useParams} from "react-router-dom";

function UsecaseExample() {
    let { useCaseUrl } = useParams();

    return (
        <>
            <div className="bg-blue-100 py-6 flex items-center justify-center min-w-screen px-4">
                <p className="text-5xl text-gray-800 capitalize">{useCaseUrl}</p>
            </div>
        </>
    );
}

export default UsecaseExample;
