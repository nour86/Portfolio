'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import Slider from './../Slider'

function ProjectExpanded({ project }) {
    return (
        <motion.article
            key={`details${project.title}`}
            initial={{ opacity: 0, scale: 0, x: '100%', y: '30%' }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{
                ease: 'easeOut',
                duration: 0.5,
            }}
            exit={{ opacity: 0, scale: 0, x: '100%' }}
            className="z-10 absolute flex items-center justify-center self-end w-[100vw] h-5/6 max-h-[1000px] "
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
                                className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-3/4 md:w-screen block"
                            />
                        </picture>

                        <div className="relative w-6/12 mt-[3vw] md:w-[calc(96%)] md:m-3 aspect-video shadow-inner rounded-md bg-transparent overflow-hidden">
                            <Slider data={project.diapo} />
                        </div>
                    </div>
                </div>

                <motion.div className="col-span-10 row-span-2 md:col-span-4 md:row-span-5 lg:col-span-5 lg:row-span-5  ">
                    <div className="flex flex-col gap-5 m-6">
                        <h3 className="text-xl md:text-2xl bg-transparent text-gray-500">
                            {project.subtitle}
                        </h3>

                        <div className=" flex md:flex-row w-full justify-between  overflow-auto">
                            <ul className="list-disc md:m-3">
                                {project.description?.map(
                                    (paragraph, index) => {
                                        return (
                                            <li
                                                className=" text-md md:text-1xl"
                                                key={index}
                                            >
                                                {paragraph}
                                            </li>
                                        )
                                    }
                                )}
                            </ul>
                        </div>
                        <div className="flex flex-row flex-wrap items-center self-baseline gap-2">
                            {project.technos.map((techno, index) => {
                                return (
                                    <img
                                        className="h-10 w-10 sm:h-14 sm:w-14 hover:opacity-80 hover:translate-y-1"
                                        src={`./logos/${techno}.svg`}
                                        key={index}
                                        alt={`logo ${techno}`}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </motion.div>

                <div className="col-span-10 row-span-1 md:col-span-6 md:row-span-2 lg:col-span-5 lg:row-span-2  ">
                    <div className="flex flex-wrap gap-6 h-full justify-evenly items-start">
                        {project.website && (
                            <motion.button whileHover={{ scale: 0.9 }}>
                                <Link
                                    className="bg-yellow-500 text-black px-3 flex items-center justify-evenly border-none rounded-xl p-3 w-24 sm:w-48 lg:w-60 h-12 cursor-pointer"
                                    href={project.repo}
                                    target="blank"
                                >
                                    <p className="hidden sm:inline">Visit</p>
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
                                <p className="hidden sm:inline">See me repo</p>
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
    )
}

export default ProjectExpanded
