'use client'

import React, { useEffect, useRef, useState } from 'react'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Link from 'next/link'
import Slider from './Slider'
import DisplayTechnos from './DisplayTechnos'

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
            className={` h-screen w-[100vw] snap-center ${
                idIsEven ? 'bg-gradient-to-b' : 'bg-gradient-to-t'
            } from-slate-950 to-slate-800 flex items-center overflow-hidden relative`}
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
                animate={expanded ? 'expanded' : { opacity: 1, x: 0 }}
                variants={variants}
                transition={{
                    ease: 'easeOut',
                    duration: 0.5,
                }}
                exit={{ opacity: 0, x: '-100%' }}
                className=" flex items-center justify-center self-end w-full h-5/6"
            >
                <div className="w-full md:w-3/4 max-w-screen-xl flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-8 h-fulloverflow-hidden ">
                    {/* imageContainer */}
                    <div className=" relative flex flex-1 md:flex-2 h-full items-center object-cover">
                        <div className=" p-4">
                            <img
                                src={project.cover}
                                alt=""
                                className="w-full max-w-screen-sm m-auto md: object-cover rounded-xl"
                            />
                        </div>
                    </div>
                    {/* text container */}
                    <div className="flex flex-1 h-full max-w-screen-md justify-start items-start lg:items-center ">
                        <motion.div
                            className="flex-1 flex flex-col gap-4 justify-center lg:items-start overflow-none"
                            style={{ y }}
                        >
                            <h3 className="text-gray-500 text-4xl text-center lg:text-start">
                                {project.title}
                            </h3>
                            <div className="px-2  max-w-md ">
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
            {expanded && (
                <motion.article
                    key={`details${project.title}`}
                    initial={{ opacity: 0, scale: 0, x: '100%', y: '30%' }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{
                        ease: 'easeOut',
                        duration: 0.5,
                    }}
                    exit={{ opacity: 0, scale: 0, x: '100%' }}
                    className="z-10 absolute flex items-center justify-center self-end w-[100vw] h-5/6 "
                >
                    <motion.div className="w-full h-full md:w-5/6 max-w-screen-xl grid grid-cols-10 gap-x-3 ">
                        <div
                            name="diapo-grid"
                            className=" col-span-10 row-span-2 md:col-span-6 md:row-span-3 lg:col-span-5 lg:row-span-3 "
                        >
                            <div
                                name="diapo-screen"
                                className=" flex flex-col h-full items-center relative"
                            >
                                <picture>
                                    <source
                                        media="(max-width: 768px)"
                                        srcSet="./diapo/macbook2.svg 768w"
                                        sizes="768px"
                                    />

                                    <img
                                        src="./diapo/imac.svg"
                                        alt="visionneuse"
                                        className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-5/6 md:w-screen block"
                                    />
                                </picture>

                                <div className="relative w-7/12 mt-[3vw] md:w-[calc(96%)] md:m-3 aspect-video shadow-inner rounded-md bg-transparent overflow-hidden">
                                    <Slider data={project.diapo} />
                                </div>
                            </div>
                        </div>

                        <motion.div className="col-span-10 row-span-2 md:col-span-4 md:row-span-5 lg:col-span-5 lg:row-span-5  ">
                            <div className="flex flex-col gap-5 m-6 md:ml-12 ">
                                <h3 className="text-xl md:text-2xl bg-transparent text-gray-500">
                                    {project.subtitle}
                                </h3>
                                <DisplayTechnos
                                    array={project.technos}
                                    style="flex flex-row items-center"
                                />
                                <div className=" flex md:flex-row w-full justify-between">
                                    <p className="flex flex-1  text-md   md:text-1xl">
                                        Booki est un site Internet qui permet
                                        aux usagers de trouver des hébergements
                                        et des activités dans la ville de leur
                                        choix.
                                        <br /> L'objectif est d intégrer l
                                        interface du site avec du code HTML et
                                        CSS, à partir de maquettes Figma.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="col-span-10 row-span-1 md:col-span-6 md:row-span-2 lg:col-span-5 lg:row-span-2  ">
                            <div className="flex flex-wrap gap-6 h-full justify-evenly items-center">
                                {project.website && (
                                    <motion.button whileHover={{ scale: 0.9 }}>
                                        <Link
                                            className="bg-yellow-500 text-black px-3 flex items-center justify-evenly border-none rounded-xl p-3 w-24 sm:w-48 lg:w-60 h-12 cursor-pointer"
                                            href={project.repo}
                                            target="blank"
                                            whileHo
                                        >
                                            <p className="hidden sm:inline">
                                                Visit
                                            </p>
                                            <img
                                                src={project.logo}
                                                className="h-6"
                                            ></img>
                                        </Link>
                                    </motion.button>
                                )}
                                <motion.button whileHover={{ scale: 0.9 }}>
                                    <Link
                                        className="bg-yellow-500 text-black px-3 flex items-center justify-evenly border-none rounded-xl p-3  w-24 sm:w-48 lg:w-60 h-12 cursor-pointer"
                                        href={project.repo}
                                        target="blank"
                                    >
                                        <p className="hidden sm:inline">
                                            See me repo
                                        </p>
                                        <img
                                            src="./logos/github.svg"
                                            className="h-6 w-6 hover:translate-y-2"
                                        ></img>
                                    </Link>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </motion.article>
            )}
        </motion.section>
    )
}

export default Project

// bg-gradient-to-tl from-gray-700 to-gray-400
