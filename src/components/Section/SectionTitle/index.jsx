import React from 'react'

const SectionTitle = ({ title }) => {
    return (
        <div
            name="text-container"
            className="h-1/6 w-full flex max-w-7xl self-center justify-end items-center m-4 md:m-9"
        >
            <div className="flex items-center gap-5 justify-end mx-3 ">
                <h2 className=" font-light text-xl sm:text-2xl text-gray-400 right-0">
                    {title}
                </h2>
                <hr className="hidden sm:block w-[30vw] border-t border-solid border-gray-400" />
            </div>
        </div>
    )
}

export default SectionTitle
