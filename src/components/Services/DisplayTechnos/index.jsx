import React from 'react'

const DisplayTechnos = ({ array, style }) => {
    return (
        <div className={style}>
            {array.map((techno, index) => {
                return (
                    <img
                        className="h-10 w-10 sm:h-14 sm:w-14 hover:opacity-80 hover:translate-y-1"
                        src={`./logos/${techno}.svg`}
                        key={index}
                    />
                )
            })}
        </div>
    )
}

export default DisplayTechnos
