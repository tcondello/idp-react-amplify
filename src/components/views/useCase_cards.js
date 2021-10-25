import React from 'react';
import useCase_array from '../../config/useCases'

function UseCaseCards(props) {
    return (
        <>
            <div className="bg-blue-200 py-6 flex items-center justify-center min-w-screen px-4">
                <p className="text-5xl text-gray-800">{props.name}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-4 h-24">
                {useCase_array.filter(useCase => useCase.tag.includes(props.name)).map(filteredTag =>
                    <div key={filteredTag.name} className="max-w-md py-4 px-8 bg-white rounded-lg my-5">
                        <div>
                            <h2 className="text-gray-800 text-3xl font-semibold">
                                {filteredTag.name}
                            </h2>
                            <p className="mt-2 text-gray-600">
                                {filteredTag.description}
                            </p>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="text-xl font-medium text-indigo-500">
                                See it in Action
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default UseCaseCards;
