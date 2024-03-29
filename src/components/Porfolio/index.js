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
        <section>
            <div className="relative w-full" ref={ref}>
                <div className="sticky top-0 h-1/6 left-0 pt-4 text-center text-orange-400 text-6xl z-30 bg-transparent">
                    <div className="absolute w-full h-16">
                        <ParticlesBackground />
                    </div>
                    <h2 id="Portfolio">My Works</h2>
                    <motion.div
                        style={{ scaleX }}
                        className=" h-1.5 bg-white border-none rounded-full mt-2"
                    ></motion.div>
                </div>
                <div className="w-full h-80 ">
                    <img
                        className="object-contain"
                        src="/background/stars.png"
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
