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
            className="z-10 absolute top-0 left-0 snap-start flex flex-col items-center justify-start md:justify-center w-full h-full max-h-[calc(1024px)]   "
        >
            <motion.button
                whileHover={{ scale: 0.9 }}
                className=" flex items-center justify-center absolute top-[5vh] md:top-1/3 left-4 md:left-12 rounded-full w-10 h-10 md:w-12 md:h-12 sm:w-16 sm:h-16 bg-white z-40 text-black  "
                onClick={() => handler(false)}
            >
                <img
                    src="./left_arrow.svg"
                    className="h-4 md:h-6"
                    alt="fleche retour"
                ></img>
            </motion.button>
            <motion.div className="w-full md:w-3/4 max-w-screen-xl flex justify-center md:justify-start items-center flex-wrap relative gap-x-3 py-3  ">
                <div
                    name="diapo-grid"
                    className=" w-full sm:w-3/4 max-w-[calc(840px)] mx-4 flex items-center justify-center md:self-start md:justify-start   "
                >
                    <div
                        name="diapo-screen"
                        className=" w-5/6 sm:w-full max-w-[calc(816px)] aspect-video relative rounded-md flex bg-screen items-center "
                    >
                        <div className="relative w-full m-2 aspect-video shadow object-fill-inner rounded-md overflow-hidden">
                            <Slider data={project.diapo} />
                        </div>
                    </div>
                </div>

                <div
                    name="techno"
                    className="flex flex-row flex-wrap items-center justify-center self-baseline gap-2 w-full m-4 md:m-0 md:w-1/12 md:flex-col md:self-start md:py-3 "
                >
                    {project.technos.map((techno, index) => {
                        return (
                            <img
                                className="w-6 h-6 sm:h-10 sm:w-10 lg:h-12 lg:w-12 hover:opacity-80 hover:translate-y-1"
                                src={`./logos/${techno}.svg`}
                                key={index}
                                alt={`logo ${techno}`}
                            />
                        )
                    })}
                </div>

                <motion.div
                    name="description"
                    className=" w-full m-4 max-h-fit "
                >
                    <div className="flex flex-col justify-between gap-5 ">
                        <h3 className="text-xl md:text-2xl bg-transparent text-gray-500">
                            {project.subtitle}
                        </h3>

                        <div className=" flex md:flex-row w-full justify-between overflow-auto">
                            <ul className="w-full list-disc mx-12 flex flex-wrap">
                                {project.description?.map(
                                    (paragraph, index) => {
                                        return (
                                            <li
                                                className="w-full px-2 lg:w-5/12 text-md md:text-1xl"
                                                key={index}
                                            >
                                                {paragraph}
                                            </li>
                                        )
                                    }
                                )}
                            </ul>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    name="button"
                    className=" w-5/6 lg:w-1/4 m-4 flex flex-wrap items-start lg:self-end"
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
                </motion.div>
            </motion.div>
        </motion.article>
    )
}

export default ProjectExpanded
