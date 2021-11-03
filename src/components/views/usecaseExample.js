import React from 'react';
import {useParams} from "react-router-dom";
import receipt from "../../examples/Invoice Processing/receipt.jpeg";
import invoice from "../../examples/Invoice Processing/invoice.jpeg";

function UsecaseExample() {
    let { useCaseUrl } = useParams();

    return (
        <>
            <div className="bg-blue-800 flex items-center justify-center min-w-screen">
                <p className="text-5xl text-blue-100 capitalize">{useCaseUrl}</p>
            </div>
            <div className="grid grid-cols-2 gap-x-1 gap-y-1 h-screen">
                {/* START LOOOKING AT THESE CLASSES TO CHANGE THE BOXES */}

                <div className="max-w py-4 px-4 bg-white rounded-lg my-5">
                    <div>
                        <h2 className="text-gray-800 text-3xl font-semibold">
                            Images
                        </h2>
                    </div>
                    <div className="flex py-2 pb-2 border-t border-gray-200"/>
                    <div className="grid grid-cols-1 gap-y-1 gap-x-1 justify-items-center">
                        <div className="transform scale-75 rounded-2xl duration-200 hover:scale-95">
                            <img
                                src={receipt}
                                alt=""
                            />
                        </div>
                        <div className="transform scale-75 rounded-2xl duration-200 hover:scale-95">
                            <img
                                src={invoice}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="max-w py-4 px-4 bg-white rounded-lg my-5">
                    <div>
                        <h2 className="text-gray-800 text-3xl font-semibold">
                            Output
                        </h2>
                    </div>
                    <div className="flex py-4 pb-2 border-t border-gray-200"/>
                    <div className="block w-full overflow-x-auto">
                        <table className="items-center bg-transparent w-full border-collapse ">
                            <thead>
                            <tr>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Page name
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Visitors
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Unique users
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Bounce rate
                                </th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                    /argon/
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                    4,569
                                </td>
                                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    340
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                    46,53%
                                </td>
                            </tr>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                    /argon/index.html
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    3,985
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    319
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                                    46,53%
                                </td>
                            </tr>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                    /argon/charts.html
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    3,513
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    294
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                                    36,49%
                                </td>
                            </tr>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                    /argon/tables.html
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    2,050
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    147
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                    50,87%
                                </td>
                            </tr>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                    /argon/profile.html
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    1,795
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    190
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className="fas fa-arrow-down text-red-500 mr-4"></i>
                                    46,53%
                                </td>
                            </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UsecaseExample;
