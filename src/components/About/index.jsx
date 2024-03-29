'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import './style.css'
import DisplayTechnos from './DisplayTechnos'
import Link from 'next/link'

const variants = {
    initial: {
        x: -500,
        opacity: 0,
        y: 100,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
}

const technoVariants = {
    initial: {
        x: 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            type: 'spring',
            stiffness: '400',
            damping: 60,
        },
    },
}

const used = ['html5', 'css3', 'javascript', 'reactjs']
const workedWith = ['nextjsdark', 'tailwind', 'nodejs', 'mongodb']
const tools = ['git', 'githubdark', 'sass']

const About = () => {
    const ref = useRef()
    const isInView = useInView(ref, { margin: '-200px' })

    return (
        <section
            id="About"
            className="h-screen w-full flex items-center justify-center snap-center bg-gradient-to-b from-slate-950 to-slate-800"
        >
            {/* for position ref */}
            <div
                className=" absolute w-full h-10 bg-transparent"
                ref={ref}
            ></div>
            <motion.div
                className="h-screen max-w-6xl flex flex-col items-center justify-between bg-transparent overflow-hidden p-3 sm:p-10 "
                variants={variants}
                initial="initial"
                animate={isInView && 'animate'}
            >
                <div
                    name="text-container"
                    className="flex-2 flex self-end text-end items-center gap-5 mb-9"
                    variants={variants}
                >
                    <p className=" font-light text-xl sm:text-2xl text-gray-400 right-0">
                        A propos de moi
                    </p>
                    <hr className="hidden sm:block w-[30vw] border-t border-solid border-gray-400" />
                </div>
                <motion.div
                    name="titleContainer"
                    className="flex flex-2 flex-col w-full items-center md:items-start "
                    variants={variants}
                >
                    <motion.div className="flex items-start px-5 gap-6 sm:gap-12">
                        <h1 className=" text-2xl sm:text-4xl text-left sm:text-left font-extralight">
                            <motion.b
                                className="text-4xl sm:text-6xl text-white"
                                whileHover={{ color: 'orange' }}
                            >
                                Développeur web{' '}
                            </motion.b>
                            junior <br className="hidden sm:flex" />
                            <motion.b
                                className="text-4xl sm:text-6xl text-white"
                                whileHover={{ color: 'orange' }}
                            >
                                Passionné
                            </motion.b>{' '}
                            par l'UI/UX desing
                        </h1>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="flex-2 flex flex-col justify-center items-center max-w-7xl"
                    variants={variants}
                >
                    <motion.div className="  flex-1 flex flex-col sm:flex-row max-w-6xl justify-between">
                        <motion.div className="flex-1 px-5 leading-relaxed my-3 bg-transparent hidden sm:flex sm:flex-col">
                            <p className="my-3">
                                Après une première carrière dans le contrôle de
                                gestion, suivie de plusieurs années à l'étranger
                                dans le secteur humanitaire, je suis de retour à
                                Paris et je me lance dans le développement web.
                            </p>
                            <p className="my-3">
                                Féru de puzzles et de résolution d'énigmes, je
                                peux passer des journées entières sur codewar si
                                je ne fais pas attention...
                            </p>
                            <p className="my-3">
                                Je suis toujours enthousiaste à l'idée
                                d'apprendre et de découvrir de nouvelles
                                opportunités dans le monde du développement web
                            </p>
                        </motion.div>
                        <motion.div
                            className=" p-5 w-full sm:max-w-80 float-right border-solid flex flex-col items-end text-end"
                            variants={technoVariants}
                        >
                            <motion.div variants={technoVariants}>
                                <h2>Les technos que j'utilise</h2>
                                <motion.div
                                    className="flex m-3"
                                    variants={technoVariants}
                                    initial="initial"
                                    animate={isInView && 'animate'}
                                >
                                    <DisplayTechnos
                                        array={used}
                                        style="flex justify-center justify-items-center bg-transparent gap-4"
                                    />
                                </motion.div>
                            </motion.div>
                            <motion.div variants={technoVariants}>
                                <h2>j'ai aussi pu travailler avec </h2>
                                <motion.div
                                    className="flex m-3"
                                    variants={technoVariants}
                                    initial="initial"
                                    animate={isInView && 'animate'}
                                >
                                    <DisplayTechnos
                                        array={workedWith}
                                        style="flex justify-center justify-items-center bg-transparent gap-4 "
                                    />
                                </motion.div>
                            </motion.div>
                            <motion.div variants={technoVariants}>
                                <h2>mes outils du quotidien </h2>
                                <motion.div
                                    className="flex m-3"
                                    variants={technoVariants}
                                    initial="initial"
                                    animate={isInView && 'animate'}
                                >
                                    <DisplayTechnos
                                        array={tools}
                                        style="flex justify-center justify-items-center bg-transparent gap-4 "
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <div className="flex justify-between  p-5 border-solid w-full gap-9">
                        <a href="/#Contact">
                            <motion.button
                                whileHover={{
                                    scale: 0.9,
                                    color: 'black',
                                    background: 'white',
                                }}
                                className=" p-5 border-2 border-solid border-white rounded-xl bg text-white cursor-pointer z-10"
                            >
                                Ecrivez moi
                            </motion.button>
                        </a>
                        <a href={'https://github.com/nour86'} target="blank">
                            <motion.button
                                whileHover={{
                                    scale: 0.9,
                                    color: 'black',
                                    background: 'white',
                                }}
                                className=" p-5 border-2 border-solid border-white rounded-xl bg text-white cursor-pointer z-10"
                            >
                                ma page Github
                            </motion.button>
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default About
