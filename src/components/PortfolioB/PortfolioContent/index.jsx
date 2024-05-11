import React from 'react'
import PortfolioGrid from './PortfolioGrid'
import { useState, useRef, useEffect } from 'react'
import ProjectExpanded from './Expanded'

import { useInView, AnimatePresence } from 'framer-motion'

const variants = {
    closed: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: '300',
            damping: 20,
        },
    },
    expanded: {
        x: '-100vw',
        transition: {
            type: 'spring',
            stiffness: '300',
            damping: 20,
        },
    },
}

const PortfolioContent = ({ projects }) => {
    const [expanded, setExpanded] = useState(false)
    const [projectId, setProject] = useState(0)
    const ref = useRef()
    const isInView = useInView(ref)

    useEffect(() => {
        closeProject()
        setProject(0)
    }, [isInView])

    function closeProject() {
        setExpanded(false)
        setProject(0)
    }
    function openProject(id) {
        setExpanded(true)
        setProject(id)
    }

    return (
        <>
            <div className=" absolute w-full h-10 " ref={ref}></div>

            <PortfolioGrid
                projects={projects}
                expanded={expanded}
                openProject={openProject}
                variants={variants}
            />

            <AnimatePresence>
                {expanded && projectId !== 0 && (
                    <ProjectExpanded
                        closeProject={closeProject}
                        project={projects[projectId - 1]}
                    />
                )}
            </AnimatePresence>
        </>
    )
}

export default PortfolioContent
