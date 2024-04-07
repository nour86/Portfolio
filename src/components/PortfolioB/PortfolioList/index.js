import React, { useState } from 'react'
import './style.css'
import Card from './Card'

const PortfolioList = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const changePosition = (e) => {
        setPosition({ x: e.clientX, y: e.clientY })
    }

    return (
        <div
            id="cards"
            name="cards-grid"
            className=" h-full w-[calc(100%-20px)] max-w-5xl self-center m-auto bg-slate-950 flex flex-wrap gap-2 opacity-100"
            onMouseMove={changePosition}
        >
            <Card position={position} />
            <Card position={position} />
            <Card position={position} />
            <Card position={position} />
            <Card position={position} />
            <Card position={position} />
        </div>
    )
}

export default PortfolioList
