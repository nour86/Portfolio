'use client'

import React, { useEffect, useRef, useState } from 'react'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Diaporama from '../Diaporama'

const variants = {
    closed: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: '400',
            damping: 30,
        },
    },
    expanded: {
        x: '-50%',
        transition: {
            duration: 0.5,
            type: 'spring',
            stiffness: '400',
            damping: 30,
        },
    },
}

const Project = ({ project }) => {
    const [expanded, setExpanded] = useState(false)
    const ref = useRef()
    const isInView = useInView(ref)
    const technos = project.technos
    const idIsEven = project.id % 2 !== 0

    useEffect(() => {
        setExpanded(false)
    }, [isInView])

    const { scrollYProgress } = useScroll({
        target: ref,
    })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (
        // portfolioContainer
        <motion.section
            animate={expanded ? 'expanded' : 'closed'}
            variants={variants}
            // className={` h-screen w-[200vw] snap-center bg-black flex items-center justify-center overflow-hidden m-auto gap-3 relative`}
            className={` h-screen w-[200vw] snap-center ${
                idIsEven ? 'bg-gradient-to-b' : 'bg-gradient-to-t'
            } from-slate-950 to-slate-800 flex items-center justify-center overflow-hidden m-auto gap-3 relative`}
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
                className="flex items-center flex-1 justify-center w-full h-2/3 m-6 bg-transparent"
            >
                <div className=" flex w-[600px] items-center justify-center gap-8 h-full bg-transparent">
                    {/* imageContainer */}
                    <div className=" relative  w-full flex flex-1 items-center bg-transparent object-contain">
                        <img src={project.cover} alt="" />
                    </div>
                    {/* text container */}
                    <motion.div
                        className="flex-1 flex flex-col gap-8"
                        style={{ y }}
                    >
                        <h3 className="text-gray-500 text-xl">
                            {project.title}
                        </h3>
                        <p>{project.description}</p>
                        <button
                            className="bg-yellow-500 text-black border-none rounded-xl p-3 max-w-48 min-w-24 w-1/4 cursor-pointer"
                            onClick={() => setExpanded(true)}
                        >
                            See more
                        </button>
                    </motion.div>
                </div>
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
                className="flex items-center flex-1 justify-center w-full h-2/3 m-6 bg-transparent"
            >
                <div className=" relative h-full w-1/3 flex flex-col  px-7 items-center object-cover overflow-hidden bg-transparent">
                    <img className="flex-2 m-3" src={project.logo}></img>
                    <Diaporama pictures={project.diapo} />
                </div>
                <motion.div className="w-2/3 h-full justify-between flex p-7 flex-col gap-8">
                    <h2 className="text-gray-500 text-4xl">{project.title}</h2>
                    <h3 className="text-blue-900 text-3xl">
                        {project.subtitle}
                    </h3>
                    <div className="w-full flex justify-start">
                        {technos.map((techno, index) => {
                            return (
                                <img
                                    className=" h-14 w-14 hover:translate-y-2"
                                    src={`./logos/${techno}.svg`}
                                    key={index}
                                />
                            )
                        })}
                    </div>
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
