'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ParticlesBackground from '../Particles'

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
        <div className=" h-[calc(100vh-100px)] overflow-hidden relative bg-gradient-to-b from-slate-950 to-slate-800">
            <div className="max-w-7xl m-auto h-full">
                <motion.div
                    className=" p-4 h-full w-full items-center flex flex-col justify-center gap- "
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2
                        variants={textVariants}
                        className=" text-4xl text-purple-950 tracking-[0.5rem] m-9"
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
                    <motion.div variants={textVariants} className="flex gap-5">
                        <motion.button
                            variants={textVariants}
                            className=" p-5 border-2 border-solid border-white rounded-xl bg text-white cursor-pointer z-10"
                        >
                            see the latest works
                        </motion.button>
                        <motion.button
                            variants={textVariants}
                            className=" p-5 border-2 border-solid border-white rounded-xl bg text-white cursor-pointer z-10"
                        >
                            Contact
                        </motion.button>
                    </motion.div>
                    <motion.img
                        variants={textVariants}
                        animate="scrollButton"
                        className=" w-12 mt-12"
                        src="/scroll.png"
                        alt=""
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
        </div>
    )
}

export default Hero
