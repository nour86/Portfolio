'use client'

import { motion } from 'framer-motion'

import { RepoButton, WebsiteButton } from './buttons'

import Slider from './Slider'

function ProjectExpanded({ project, closeProject }) {
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
            className="z-10 absolute top-0 left-0 snap-start flex flex-col items-center justify-start md:justify-center w-full h-full max-h-[calc(1024px)] overflow-hidden   "
        >
            <motion.button
                whileHover={{ scale: 0.9 }}
                className=" flex items-center justify-center absolute top-[calc(28%)] left-4 md:left-12 rounded-full w-10 h-10 md:w-12 md:h-12 sm:w-16 sm:h-16 bg-white z-40 text-black  "
                onClick={() => closeProject()}
            >
                <img
                    src="./left_arrow.svg"
                    className="h-4 md:h-6"
                    alt="fleche retour"
                ></img>
            </motion.button>
            <motion.div className="w-full md:w-3/4 max-w-screen-xl flex items-center justify-center flex-wrap relative overflow-auto no-scrollbar gap-x-3 py-3 ">
                <div
                    name="diapo-grid"
                    className=" w-full md:w-3/4 max-w-[calc(840px)] flex items-center justify-center m-2 md:m-6  "
                >
                    <div
                        name="diapo-screen"
                        className=" w-5/6  max-w-[calc(816px)] md:self-start aspect-video relative rounded-md flex bg-screen items-center "
                    >
                        <div className="relative w-full m-2 aspect-video shadow object-cover rounded-md overflow-hidden">
                            <Slider data={project.diapo} />
                        </div>
                    </div>
                </div>

                <div
                    name="techno"
                    className="w-full flex flex-row flex-wrap items-center justify-center gap-2  m-4 "
                >
                    {project.technos.map((techno, index) => {
                        return (
                            <img
                                className="w-8 h-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 hover:opacity-80 hover:translate-y-1"
                                src={`./logos/${techno}.svg`}
                                key={index}
                                alt={`logo ${techno}`}
                            />
                        )
                    })}
                </div>

                <motion.div
                    name="description"
                    className=" w-full mx-6 max-h-fit flex items-center justify-center "
                >
                    <div className="flex flex-col items-center justify-between gap-5  ">
                        <h3 className="text-xl md:text-2xl bg-slate-800 w-fit p-4 rounded-xl text-center text-gray-300">
                            {project.subtitle}
                        </h3>

                        <div className=" flex justify-start h-36 md:h-fit overflow-auto w-fit bg-slate-800 rounded-xl px-6 py-2">
                            <ul className="w-full list-disc flex flex-col justify-start">
                                {project.description?.map(
                                    (paragraph, index) => {
                                        return (
                                            <li
                                                className="w-full text-md md:text-1xl "
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

                <motion.div name="button" className="  m-6 flex items-start ">
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
