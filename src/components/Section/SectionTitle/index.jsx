import React from 'react'

const SectionTitle = ({ title }) => {
    return (
        <div className="w-full z-10 sticky top-0 backdrop-blur-sm shadow-lg shadow-slate-600 flex justify-center">
            <div
                name="text-container"
                className=" w-full h-1/6 flex-2 flex max-w-7xl self-center justify-end items-center   "
            >
                <div className="flex items-center gap-5 justify-end mx-3 h-24 ">
                    <h2 className=" font-light text-xl sm:text-2xl text-gray-400 right-0">
                        {title}
                    </h2>
                    <hr className="hidden sm:block w-[30vw] border-t border-solid border-gray-400" />
                </div>
            </div>
        </div>
    )
}

export default SectionTitle
