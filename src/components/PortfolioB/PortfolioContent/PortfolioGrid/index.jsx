import React, { useState } from 'react'
import './style.css'
import Card from './Card/index.jsx'
import MouseTracker from './MouseTracker'
import { motion } from 'framer-motion'

const PortfolioGrid = ({ projects, setProject, expanded, variants }) => {
    const [mouseOver, setMouseOver] = useState(false)

    const handleMouseEnter = () => {
        setMouseOver(true)
    }

    const handleMouseLeave = () => {
        setMouseOver(false)
    }

    return (
        <>
            <motion.div
                id="cards"
                name="cards-grid"
                className="  w-full max-w-7xl self-center flex flex-wrap relative opacity-100 "
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
                            setProject={setProject}
                        />
                    )
                })}
            </motion.div>
        </>
    )
}

export default PortfolioGrid
