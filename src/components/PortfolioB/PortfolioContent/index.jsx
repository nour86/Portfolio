import React from 'react'
import PortfolioGrid from './PortfolioGrid'
import { useState, useRef, useEffect } from 'react'
import ProjectExpanded from './Expanded'

import {
    motion,
    useScroll,
    useTransform,
    useInView,
    AnimatePresence,
} from 'framer-motion'

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
    const [projectId, setProjectId] = useState(false)
    const ref = useRef()
    const isInView = useInView(ref)

    useEffect(() => {
        setProjectId(false)
    }, [isInView])

    return (
        <>
            <div className=" absolute w-full h-10 " ref={ref}></div>

            <PortfolioGrid
                projects={projects}
                expanded={projectId}
                setProject={setProjectId}
                variants={variants}
            />

            <AnimatePresence>
                {projectId && (
                    <ProjectExpanded
                        handler={setProjectId}
                        project={projects[projectId - 1]}
                    />
                )}
            </AnimatePresence>
        </>
    )
}

export default PortfolioContent
