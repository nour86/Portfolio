import React, { useState } from 'react'
import './style.css'
import Card from './Card/index.jsx'
import MouseTracker from './MouseTracker'
import { motion } from 'framer-motion'

const PortfolioGrid = ({ projects, expanded, openProject, variants }) => {
    const [mouseOver, setMouseOver] = useState(false)

    const handleMouseEnter = () => {
        setMouseOver(true)
    }

    const handleMouseLeave = () => {
        setMouseOver(false)
    }

    return (
        <div className="flex flex-col absolute items-center justify-center overflow-hidden h-full w-full sm:mt-0  ">
            <motion.div
                name="cards-grid"
                className=" w-full h-50vh sm:w-[calc(610px)] lg:w-[calc(900px)] sm:no-scrollbar max-w-7xl pt-4 flex flex-wrap justify-center overflow-auto sm:justify-start relative opacity-100 "
                initial={{ opacity: 0, x: '-100%' }}
                animate={expanded ? 'expanded' : { opacity: 1, x: 0 }}
                variants={variants}
                transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 20,
                }}
                exit={{ opacity: 0, x: '-100%' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <MouseTracker mouseOver={mouseOver} />

                {projects.map((project) => {
                    return (
                        <Card
                            title={project.title}
                            cover={project.cover}
                            preview={project.preview}
                            subtitle={project.subtitle}
                            key={project.id}
                            id={project.id}
                            openProject={openProject}
                        />
                    )
                })}
            </motion.div>
        </div>
    )
}

export default PortfolioGrid
