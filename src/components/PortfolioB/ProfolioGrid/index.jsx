import React, { useState, useRef } from 'react'
import './style.css'
import Card from './Card/index.jsx'

const PortfolioGrid = () => {
    const [isMouseOver, setIsMouseOver] = useState(false)

    const handleMouseIn = (e) => {
        setIsMouseOver((prev) => !prev)
    }

    return (
        <div
            id="cards"
            name="cards-grid"
            className=" h-full w-[calc(100%-20px)] max-w-5xl self-center m-auto  flex flex-wrap relative gap-2 opacity-100 p-4"
            onMouseEnter={handleMouseIn}
            onMouseLeave={handleMouseIn}
        >
            <Card mouseInGrid={isMouseOver} />
            <Card mouseInGrid={isMouseOver} />
            <Card mouseInGrid={isMouseOver} />
            <Card mouseInGrid={isMouseOver} />
            <Card mouseInGrid={isMouseOver} />
            <Card mouseInGrid={isMouseOver} />
        </div>
    )
}

export default PortfolioGrid
