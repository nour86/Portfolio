'use client'

import React, { useEffect, useRef, useState } from 'react'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Diaporama from './Diaporama'
import Link from 'next/link'

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

const Project = ({ project, children }) => {
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
            } from-slate-950 to-slate-800 flex items-center space between overflow-hidden m-auto relative`}
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
                className=" flex items-center flex-1 justify-center w-full h-3/4 bg-transparent "
            >
                <div className=" flex flex-col lg:flex-row w-[100vw] md:w-3/4 items-center justify-center px-8 gap-8 h-full bg-transparent ">
                    {/* imageContainer */}
                    <div className=" relative flex flex-1 h-full items-center bg-transparent object-cover">
                        <img
                            src={project.cover}
                            alt=""
                            className="w-full object-cover"
                        />
                    </div>
                    {/* text container */}
                    <motion.div
                        className="flex-1 flex flex-col gap-8 overflow-none"
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
                className="relative flex items-center flex-1 justify-center w-full h-3/4 bg-transparent  mt-6   "
            >
                <motion.div className="w-2/3 max-w-[1280px] flex flex-col h-full gap-6 py-4">
                    <div className="flex">
                        <div className=" relative h-full w-1/3 flex flex-col  px-7 items-center object-cover bg-transparent">
                            <img
                                className="flex-2 m-6"
                                src={project.logo}
                            ></img>
                            <Diaporama pictures={project.diapo} />
                        </div>
                        <motion.div className=" w-2/3 h-full flex p-7 justify-between flex-col gap-8">
                            {children}
                        </motion.div>
                    </div>
                    <div className="flex gap-12 justify-end">
                        {project.website && (
                            <Link
                                className="bg-yellow-500 text-black px-3 flex content-center justify-between border-none rounded-xl p-3 w-48 lg:w-60 h-12 cursor-pointer"
                                href={project.repo}
                                target="blank"
                            >
                                Visit
                                <img src={project.logo} className="h-6"></img>
                            </Link>
                        )}

                        <Link
                            className="bg-yellow-500 text-black px-3 flex content-center justify-between border-none rounded-xl p-3 w-48 lg:w-60 h-12 cursor-pointer"
                            href={project.repo}
                            target="blank"
                        >
                            See my repo
                            <img
                                src="./logos/github.svg"
                                className="h-6 w-6 hover:translate-y-2"
                            ></img>
                        </Link>
                    </div>
                </motion.div>
            </motion.article>
        </motion.section>
    )
}

export default Project

// bg-gradient-to-tl from-gray-700 to-gray-400
