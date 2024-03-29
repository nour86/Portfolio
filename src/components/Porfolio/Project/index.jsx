'use client'

import React, { useEffect, useRef, useState } from 'react'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'

import ProjectPreview from './Preview'
import ProjectExpanded from './Expanded'

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

const Project = ({ project }) => {
    const [expanded, setExpanded] = useState(false)
    const ref = useRef()
    const isInView = useInView(ref)
    const isIdEven = project.id % 2 !== 0

    useEffect(() => {
        setExpanded(false)
    }, [isInView])

    const { scrollYProgress } = useScroll({
        target: ref,
    })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (
        <motion.section
            name="portfolio-container"
            className={` h-screen w-[100vw] snap-center ${
                isIdEven ? 'bg-gradient-to-t' : 'bg-gradient-to-b'
            } from-slate-950 to-slate-800 flex items-center overflow-hidden relative`}
        >
            {/* for position ref */}
            <div
                className=" absolute w-full h-10 bg-transparent"
                ref={ref}
            ></div>

            <ProjectPreview
                project={project}
                expanded={expanded}
                handler={setExpanded}
                variants={variants}
                y={y}
            />
            {expanded && <ProjectExpanded project={project} />}
        </motion.section>
    )
}

export default Project

// bg-gradient-to-tl from-gray-700 to-gray-400
