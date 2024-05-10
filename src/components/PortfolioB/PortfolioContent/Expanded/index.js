'use client'

import { motion } from 'framer-motion'

import { RepoButton, WebsiteButton } from './buttons'

import Slider from './Slider'

function ProjectExpanded({ project, handler }) {
    return (
        <motion.article
            key={`details${project.title}`}
            initial={{ opacity: 0, scale: 0, x: '100%', y: '30%' }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
            }}
            exit={{ opacity: 0, scale: 0, x: '100%' }}
            className="z-10 absolute top-0 left-0 snap-start flex flex-col items-center justify-start md:justify-center self-center w-full h-full max-h-screen "
        >
            <motion.button
                whileHover={{ scale: 0.9 }}
                className=" flex items-center justify-center absolute top-[5vh] sm:top-1/3 left-4 sm:left-6 rounded-full w-12 h-12 sm:w-16 sm:h-16 bg-white z-40 text-black  "
                onClick={() => handler(false)}
            >
                <img
                    src="./left_arrow.svg"
                    className="h-6"
                    alt="fleche retour"
                ></img>
            </motion.button>
            <motion.div className="w-full md:w-5/6 max-w-screen-xl grid grid-cols-10 grid-rows-10 gap-x-3  ">
                <div
                    name="diapo-grid"
                    className=" col-span-10 row-span-3  md:row-span-5 lg:row-span-6 md:col-span-6 flex items-start justify-center "
                >
                    <div
                        name="diapo-screen"
                        className=" flex flex-col w-3/4 sm:w-5/6 mt-4  aspect-video relative bg-screen rounded-md"
                    >
                        {/* <picture>
                            <source
                                media="(max-width: 768px)"
                                srcSet="./diapo/macbook.svg 768w"
                                sizes="768px"
                            />

                            <img
                                src="./diapo/imac.svg"
                                alt="visionneuse"
                                className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-3/4 md:w-screen block"
                            />
                        </picture> */}

                        <div className="relative w-[calc(100%-24px] m-3 aspect-video shadow-inner rounded-md  overflow-hidden">
                            <Slider data={project.diapo} />
                        </div>
                    </div>
                </div>

                <motion.div
                    name="description"
                    className="col-span-10 row-span-5 sm:row-span-4 md:col-span-4 md:row-span-10 "
                >
                    <div className="flex flex-col justify-between gap-5 m-6">
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
                        <div
                            name="techno"
                            className="flex flex-row flex-wrap items-center self-baseline gap-2"
                        >
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

                <div
                    name="button"
                    className="col-span-10 row-span-1 sm:row-span-1 md:row-span-2 md:col-span-6  "
                >
                    <div className="flex flex-wrap gap-6 h-full justify-evenly  ">
                        {project.website && (
                            <WebsiteButton
                                url={project.website}
                                logo={project.logo}
                            />
                        )}
                        <RepoButton url={project.repo} />
                    </div>
                </div>
            </motion.div>
        </motion.article>
    )
}

export default ProjectExpanded
