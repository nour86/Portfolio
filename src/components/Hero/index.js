'use client'

import React from 'react'
import { motion } from 'framer-motion'

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        x: 0,
        opacity: 1,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
}
const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: '-220%',
        transition: {
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 20,
        },
    },
}

function Hero() {
    return (
        <section className=" h-[calc(100vh)] w-full snap-center overflow-hidden relative bg-gradient-to-b from-slate-950 to-slate-800">
            <div className="max-w-7xl m-auto h-full">
                <motion.div
                    className=" p-4 h-full w-full items-center flex flex-col justify-center gap- "
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2
                        variants={textVariants}
                        className=" text-6xl text-purple-600 tracking-[0.5rem] m-9"
                    >
                        Nour Alchami
                    </motion.h2>
                    <motion.h1
                        variants={textVariants}
                        className="text-4xl sm:text-8xl m-4 sm:text-center"
                    >
                        Developpeur web <br className="hidden sm:visible" /> &{' '}
                        <br className="hidden sm:visible" />
                        intégrateur
                    </motion.h1>
                    <motion.div
                        variants={textVariants}
                        className="flex flex-col sm:flex-row gap-5 mt-5"
                    >
                        <a href="#Portfolio">
                            <motion.button
                                aria-label="lien vers mes projets"
                                variants={textVariants}
                                className=" p-5 border-2 border-solid w-60 border-white rounded-xl text-white cursor-pointer z-10"
                                whileHover={{
                                    scale: 0.9,
                                    color: 'black',
                                    background: 'white',
                                }}
                            >
                                mes derniers projets
                            </motion.button>
                        </a>
                        <a href="#Contact">
                            <motion.button
                                aria-label="contactez moi"
                                variants={textVariants}
                                className=" p-5 border-2 border-solid w-60 border-white rounded-xl text-white cursor-pointer z-10"
                                whileHover={{
                                    scale: 0.9,
                                    color: 'black',
                                    background: 'white',
                                }}
                            >
                                Contactez moi
                            </motion.button>
                        </a>
                    </motion.div>
                    <motion.img
                        variants={textVariants}
                        animate="scrollButton"
                        className=" w-16 h-16 mt-16"
                        src="/scroll.webp"
                        alt="icone scroll down"
                    ></motion.img>
                </motion.div>
            </div>
            <motion.div
                className="absolute text-[30vh] -bottom-16 whitespace-nowrap text-white text-opacity-10 w-1/2 font-bold -z-1 "
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                Writer Content Creator
            </motion.div>
        </section>
    )
}

export default Hero
