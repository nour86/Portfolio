'use client'

import React, { useRef } from 'react'

import { motion, useScroll, useSpring } from 'framer-motion'

import { myProjects } from '@/content'
import Project from './Project'
import Parallax from '../Parallax'
import ParticlesBackground from '../Particles'

const Portfolio = () => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'start start'],
    })
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

    return (
        <section
            className="flex flex-col justify-center items-center h-full"
            id="Portfolio"
        >
            <div
                className="flex flex-col max-w-6xl items-center  justify-center relative w-full p-3 sm:p-10"
                ref={ref}
            >
                <div className="sticky top-0 h-1/6 flex flex-col w-full justify-center z-30">
                    <div className="absolute w-full h-full">
                        <ParticlesBackground />
                    </div>
                    <div
                        name="text-container"
                        className="flex-2 flex self-end text-end justify-end items-center max-w-screen-lg gap-5 my-6 "
                    >
                        <h2 className=" font-light text-l sm:text-2xl text-gray-400 right-0">
                            Mes derniers projets
                        </h2>
                        <hr className="w[10vw] sm:w-[30vw]  border-t border-solid border-gray-400" />
                    </div>
                    {/* <h2 id="Portfolio">My Works</h2> */}
                    <motion.div
                        style={{ scaleX }}
                        className=" h-1.5 bg-white border-none rounded-full mt-2"
                    ></motion.div>
                </div>
                <div className="w-full h-80 ">
                    <img
                        className="object-contain"
                        src="/background/stars.png"
                        alt="background stars"
                    ></img>
                </div>

                {myProjects.map((project, index) => {
                    return <Project project={project} key={project.id} />
                })}
            </div>
        </section>
    )
}

export default Portfolio
