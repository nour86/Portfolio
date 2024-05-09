import React from 'react'

const SectionContent = ({ children }) => {
    return (
        <div className="h-full w-full flex-1 relative flex justify-center items-center overflow-hidden ">
            {children}
        </div>
    )
}

export default SectionContent
