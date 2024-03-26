import React from 'react'

const TechnoUsed = ({ technos }) => {
    return (
        <div className="w-full flex justify-center justify-items-center bg-yellow-300">
            {technos.map((techno, index) => {
                return (
                    <img
                        className=" h-14 w-14 hover:translate-y-2"
                        src={`./logos/${techno}.svg`}
                        key={index}
                    />
                )
            })}
        </div>
    )
}

export default TechnoUsed
