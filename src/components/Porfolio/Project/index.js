'use client'

import React, { useRef, useState } from 'react'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Diaporama from '../Diaporama'

const variants = {
    closed: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: '400',
            damping: 20,
        },
    },
    expanded: {
        x: '-50%',
        transition: {
            duration: 0.5,
            type: 'spring',
            stiffness: '400',
            damping: 40,
        },
    },
}

const Project = ({ project }) => {
    const [expanded, setExpanded] = useState(false)
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
    })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])
    console.log(ref)

    return (
        // portfolioContainer
        <motion.section
            animate={expanded ? 'expanded' : 'closed'}
            variants={variants}
            className=" h-screen w-[200vw] snap-center bg-black flex items-center justify-center overflow-hidden m-auto gap-3 "
        >
            {/* for position ref */}
            <div
                className=" absolute w-full h-10 bg-transparent"
                ref={ref}
            ></div>
            {/* preview wrapper */}

            <motion.article
                key={`preview${project.title}`}
                initial={{ opacity: 0, x: '-100%' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    ease: 'easeOut',
                    duration: 0.5,
                }}
                exit={{ opacity: 0, x: '-100%' }}
                className="flex items-center flex-1 justify-center w-full h-2/3 m-6 bg-slate-400"
            >
                {/* imageContainer */}
                <div className=" relative  w-full h-full flex flex-1  p-7 items-center bg-slate-800">
                    <img src={project.img} className=" object-cover" alt="" />
                </div>
                {/* text container */}
                <motion.div
                    className="flex-1 flex p-7 flex-col gap-8"
                    style={{ y }}
                >
                    <h3 className="text-gray-500 text-xl">{project.title}</h3>
                    <p>{project.description}</p>
                    <button
                        className="bg-yellow-500 text-black border-none rounded-xl p-3 max-w-48 min-w-24 w-1/4 cursor-pointer"
                        onClick={() => setExpanded(true)}
                    >
                        See more
                    </button>
                </motion.div>
            </motion.article>

            {/* more infos */}

            <motion.article
                key={`details${project.title}`}
                initial={{ opacity: 0, scale: 0, x: '100%' }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                    ease: 'easeOut',
                    delay: 0.5,
                    duration: 0.5,
                }}
                exit={{ opacity: 0, scale: 0, x: '100%' }}
                className="flex items-center flex-1 justify-center w-full h-2/3 m-6 bg-red-400"
            >
                <Diaporama pictures={project.diapo} />

                <motion.div className="w-2/3 flex p-7 flex-col gap-8">
                    <h3 className="text-gray-500 text-xl">{project.title}</h3>
                    <p>{project.description}</p>
                    <button
                        className="bg-yellow-500 text-black border-none rounded-xl p-3 max-w-48 min-w-24 w-1/4 cursor-pointer"
                        onClick={() => setExpanded(false)}
                    >
                        See more
                    </button>
                </motion.div>
            </motion.article>
        </motion.section>
    )
}

export default Project
