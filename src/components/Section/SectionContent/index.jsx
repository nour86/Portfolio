import React from 'react'

const SectionContent = ({ children }) => {
    return (
        <div className="h-5/6 w-full relative flex flex-col m-auto  items-center justify-center overflow-hidden ">
            {children}
        </div>
    )
}

export default SectionContent
