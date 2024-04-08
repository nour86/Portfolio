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

    const handleMouseEnter = (e) => {
        setIsMouseOver(true)
    }
    const handleMouseLeave = (e) => {
        setIsMouseOver(false)
    }

    return (
        <div
            id="cards"
            name="cards-grid"
            className=" h-full w-[calc(100%-20px)] max-w-5xl self-center m-auto bg-slate-950 flex flex-wrap relative gap-2 opacity-100 p-4"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Card mousePosition={mousePosition} mouseInGrid={isMouseOver} />
            <Card mousePosition={mousePosition} mouseInGrid={isMouseOver} />
            <Card mousePosition={mousePosition} mouseInGrid={isMouseOver} />
            <Card mousePosition={mousePosition} mouseInGrid={isMouseOver} />
            <Card mousePosition={mousePosition} mouseInGrid={isMouseOver} />
        </div>
    )
}

export default PortfolioList
