import React from 'react';

const useCase_list = [
    {
        name: 'Claims Processing',
        description: 'Digitize, auto-review, auto-categorize documents',
        path: '/',
        tag: ['insurance']
    },
    {
        name: 'Invoice Processing',
        description: 'Auto-ingest the data and process invoice and receipts',
        path: '/',
        tag: ['insurance']
    },
    {
        name: 'Customer Onboarding',
        description: 'Auto-ingest the data and process invoice and receipts',
        path: '/',
        tag: ['insurance']
    }
]

function Insurance() {
    return (
        <>
            <div className="bg-blue-200 py-6 flex items-center justify-center min-w-screen px-4">
                <p className="text-5xl text-gray-800">Insurance</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-4 h-24">
                {useCase_list.map((useCase,i) =>
                    <div key={i} className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                        <div>
                            <h2 className="text-gray-800 text-3xl font-semibold">
                                {useCase.name}
                            </h2>
                            <p className="mt-2 text-gray-600">
                                {useCase.description}
                            </p>
                        </div>
                        <div className="flex justify-end mt-4">
                            <a href={useCase.path} className="text-xl font-medium text-indigo-500">
                                See it in Action
                            </a>
                        </div>
                    </div>

                )}
            </div>
        </>
    );
}

export default Insurance;
