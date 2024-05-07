import React, { useState } from 'react'
import './style.css'
import Card from './Card/index.jsx'

import { useMouseContext } from '../MouseContext'
import MouseTracker from './MouseTracker'

const PortfolioGrid = ({ projects }) => {
    const [mouseInGrid, setMouseInGrid] = useState(false)
    console.log('rerender')

    return (
        <>
            <div
                id="cards"
                name="cards-grid"
                className=" h-full w-[calc(100%-20px)] max-w-5xl self-center m-auto  flex flex-wrap relative gap-2 opacity-100 p-4"
                onMouseEnter={() => setMouseInGrid(true)}
                onMouseLeave={() => setMouseInGrid(false)}
            >
                {mouseInGrid && <MouseTracker />}

                {projects.map((project) => {
                    return (
                        <Card
                            title={project.title}
                            cover={project.cover}
                            preview={project.preview}
                            subtitle={project.subtitle}
                            key={project.id}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default PortfolioGrid
