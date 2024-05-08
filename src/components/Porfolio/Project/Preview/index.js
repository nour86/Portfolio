'use client'

import { motion } from 'framer-motion'

function ProjectPreview({ project, expanded, handler, y, variants }) {
    return (
        <motion.article
            key={`preview${project.title}`}
            initial={{ opacity: 0, x: '-100%' }}
            animate={expanded ? 'expanded' : { opacity: 1, x: 0 }}
            variants={variants}
            transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
            }}
            exit={{ opacity: 0, x: '-100%' }}
            className=" flex items-center justify-center self-end w-full h-5/6 bg-red-400"
        >
            <div className="w-full sm:w-3/4 max-w-screen-lg flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-8 h-fulloverflow-hidden ">
                {/* imageContainer */}
                <div className=" relative mx-4 flex flex-1 max-w-screen-sm md:flex-2 h-full p-4 items-center object-cover">
                    <motion.img
                        src={project.cover}
                        alt={`${project.title} cover`}
                        className="w-full max-w-screen-sm m-auto md: object-cover rounded-xl hover:cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        onClick={() => handler(true)}
                    />
                </div>
                {/* text container */}
                <div className="flex flex-1 h-full max-w-96 justify-start items-start lg:items-center ">
                    <motion.div
                        className="flex-1 flex flex-col gap-4 justify-center lg:items-start overflow-none"
                        style={{ y }}
                    >
                        <h3 className="text-gray-500 text-4xl text-center sm:text-start">
                            {project.title}
                        </h3>
                        <div className="px-2 text-center lg:text-start max-w-md ">
                            <p>{project.preview}</p>
                        </div>
                        <motion.button
                            className="bg-orange-400 text-black border-none rounded-xl p-3 w-40 sm:w-64  cursor-pointer self-center lg:self-start"
                            onClick={() => handler(true)}
                            whileHover={{ scale: 0.9 }}
                        >
                            plus d'infos...
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </motion.article>
    )
}

export default ProjectPreview
