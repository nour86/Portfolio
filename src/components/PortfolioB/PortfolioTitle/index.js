import React from 'react'

const PortfolioTitle = () => {
    return (
        <div className="flex flex-col max-w-6xl items-center justify-center relative w-full p-3 sm:p-5 bg-slate-500">
            <div className="sticky top-0 h-1/6 flex flex-col w-full justify-center z-10 bg-slate-700">
                <div
                    name="text-container"
                    className="flex-2 flex self-end text-end justify-end items-center max-w-screen-lg gap-5 my-3 bg-slate-800"
                >
                    <h2 className=" font-light text-l sm:text-2xl text-gray-400 right-0">
                        Mes derniers projets
                    </h2>
                    <hr className="w[10vw] sm:w-[30vw]  border-t border-solid border-gray-400" />
                </div>
            </div>
        </div>
    )
}

export default PortfolioTitle
