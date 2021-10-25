import React from 'react';
import invoice from "../../examples/Invoice Processing/invoice.jpeg"
import receipt from "../../examples/Invoice Processing/receipt.jpeg"
// import useCase_array from "../../config/useCases";



function UsecaseDetail() {
    const example = require("../../examples/Invoice Processing/invoice.json")
    const PrettyPrintJson = ({data}) => (<code><pre>{
        JSON.stringify(data, null, 2) }</pre></code>);
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            {/*
TODO:
Need to set up routes
Need to see how to properly render JSON in the tab
Need to see how to get each JSON to render depending on the image selected by the user
Need to get sidenav to collapse (look at betterDev tutorial)
            */}
            <div className="grid grid-cols-2 gap-x-1 gap-y-1 h-screen">
                <div className="max-w-md py-4 px-4 bg-white rounded-lg my-5">
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
                <div className="max-w-md py-4 px-4 bg-white rounded-lg my-5">
                    <div>
                        <h2 className="text-gray-800 text-3xl font-semibold">
                            Output
                        </h2>
                    </div>
                    <div className="flex py-4 pb-2 border-t border-gray-200"/>
                    <ul
                        className="inline-flex w-full px-1 pt-2"
                        role="tablist"
                    >
                        <li>
                            <a
                                className={
                                    "px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50 border-b-4" +
                                    (openTab === 1
                                        ? "text-black border-blue-400 border-b-4 -mb-px opacity-100"
                                        : "")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                href="#"
                            >
                                JSON
                            </a>
                        </li>
                        <li>
                            <a
                                className={
                                    "px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50 border-b-4" +
                                    (openTab === 2
                                        ? "text-black border-blue-400 border-b-4 -mb-px opacity-100"
                                        : "")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                href="#"
                            >
                                TABLE
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content tab-space p-4">
                        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                <PrettyPrintJson data={example}/>
                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                            <p>
                                TAB 2
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UsecaseDetail;
