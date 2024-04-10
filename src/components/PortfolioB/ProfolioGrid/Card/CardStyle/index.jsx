import React, { useEffect, useState } from 'react'

const CardStyle = ({ cardPosition, mouseInGrid }) => {
    const [relativePosition, setRelativePosition] = useState({
        relativeX: 0,
        relativeY: 0,
    })

    useEffect(() => {
        const handleMouseMove = (event) => {
            const relativeX = event.clientX - cardPosition.left
            const relativeY = event.clientY - cardPosition.top
            setRelativePosition({ relativeX, relativeY })
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [cardPosition])

    return (
        <>
            <div
                name="card-background"
                className="absolute h-full w-full left-0 top-0 opacity-0 hover:opacity-100 rounded-xl transition-opacity duration-500 z-[3]"
                style={{
                    background: `radial-gradient(800px circle at ${relativePosition.relativeX}px ${relativePosition.relativeY}px, rgba(255, 255, 255, 0.06), transparent 40%)`,
                }}
            >
                <div>
                    <p>Relative X: {relativePosition.relativeX}</p>
                    <p>Relative Y: {relativePosition.relativeY}</p>
                </div>
            </div>
            <div
                name="card-border"
                className={`absolute h-full w-full left-0 top-0 ${
                    mouseInGrid ? 'opacity-100' : 'opacity-0'
                } rounded-xl transition-opacity duration-500 z-[1] `}
                style={{
                    background: `radial-gradient(
                    800px circle at ${relativePosition.relativeX}px ${relativePosition.relativeY}px,rgba(255, 255, 255, 0.4),transparent 40%)`,
                }}
            ></div>
        </>
    )
}

export default CardStyle
