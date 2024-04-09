import React, { useState, useRef, useEffect } from 'react'
import './style.css'
import Card from './Card'

const PortfolioList = () => {
    const [isMouseOver, setIsMouseOver] = useState(false)
    const mousePosition = useRef({ x: 0, y: 0 })

    const handleMouseMove = (event) => {
        mousePosition.current = {
            x: event.clientX,
            y: event.clientY,
        }
    }

    const handleMouseIn = (e) => {
        setIsMouseOver((prev) => !prev)
    }

    return (
        <div
            id="cards"
            name="cards-grid"
            className=" h-full w-[calc(100%-20px)] max-w-5xl self-center m-auto  flex flex-wrap relative gap-2 opacity-100 p-4"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseIn}
            onMouseLeave={handleMouseIn}
        >
            <Card mouseInGrid={isMouseOver} />
            <Card mouseInGrid={isMouseOver} />
            <Card mouseInGrid={isMouseOver} />
            <Card mouseInGrid={isMouseOver} />
            <Card mouseInGrid={isMouseOver} />
        </div>
    )
}

export default PortfolioList
