'use client'

import React, { useEffect, useRef, useState } from 'react'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import './style.css'
import Diaporama from './Diaporama'
import Link from 'next/link'

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
        x: '-50%',
        transition: {
            duration: 0.5,
            type: 'spring',
            stiffness: '300',
            damping: 20,
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
            } from-slate-950 to-slate-800 flex items-center overflow-hidden m-auto relative`}
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
                className=" flex items-center flex-1 justify-center self-end w-full bg-green-500 h-5/6"
            >
                <div className="w-full md:w-3/4 max-w-screen-xl flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-8 h-full bg-slate-400 overflow-hidden ">
                    {/* imageContainer */}
                    <div className=" relative flex flex-1 md:flex-2 h-full items-center object-cover bg-red-400">
                        <div className="bg-yellow-500 p-4">
                            <img
                                src={project.cover}
                                alt=""
                                className="w-full max-w-screen-sm m-auto md: object-cover rounded-xl"
                            />
                        </div>
                    </div>
                    {/* text container */}
                    <div className="flex flex-1 h-full max-w-screen-md justify-start items-start lg:items-center  bg-blue-700">
                        <motion.div
                            className="flex-1 flex flex-col gap-4 justify-center lg:items-start overflow-none"
                            style={{ y }}
                        >
                            <h3 className="text-gray-500 text-4xl text-center lg:text-start">
                                {project.title}
                            </h3>
                            <div className="px-2 bg-red-400 max-w-md ">
                                <p>{project.description}</p>
                            </div>
                            <button
                                className="bg-yellow-500 text-black border-none rounded-xl p-3 w-64  cursor-pointer self-center lg:self-start"
                                onClick={() => setExpanded(true)}
                            >
                                See more
                            </button>
                        </motion.div>
                    </div>
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
                className="relative flex items-center flex-1 justify-center self-end w-full h-5/6 bg-green-800"
            >
                <motion.div className="w-full h-full md:w-5/6 max-w-screen-xl grid grid-cols-4 bg-red-900">
                    <div className=" col-span-5 row-span-2 md:col-span-2 md:row-span-3   bg-purple-400">
                        <img
                            src={project.cover}
                            alt=""
                            className="w-full max-w-screen-sm m-auto md: object-cover rounded-xl"
                        />
                    </div>

                    <motion.div className="col-span-5 row-span-2 md:col-span-2 md:row-span-5  bg-blue-400">
                        {children}
                    </motion.div>

                    <div className="col-span-5 row-span-1 md:col-span-2 md:row-span-2  bg-slate-400">
                        <div className="flex flex-col h-full justify-evenly items-center">
                            {project.website && (
                                <Link
                                    className="bg-yellow-500 text-black px-3 flex content-center justify-between border-none rounded-xl p-3 w-48 lg:w-60 h-12 cursor-pointer"
                                    href={project.repo}
                                    target="blank"
                                >
                                    Visit
                                    <img
                                        src={project.logo}
                                        className="h-6"
                                    ></img>
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
                    </div>
                </motion.div>
            </motion.article>
        </motion.section>
    )
}

export default Project

// bg-gradient-to-tl from-gray-700 to-gray-400
