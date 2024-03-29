'use client'

import React, { useRef } from 'react'
import './style.css'
import ParticlesBackground from '../Particles'

import { motion, useScroll, useTransform } from 'framer-motion'

const Parallax = ({ type }) => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })

    const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
    const yText = useTransform(scrollYProgress, [0, 1], ['0%', '200%'])

    return (
        <section
            id="Portfolio"
            className="w-full h-screen snap-center relative flex items-center content-center overflow-hidden"
            ref={ref}
            style={{
                background:
                    type === 'services'
                        ? 'linear-gradient(180deg,#111132,#0c0c1d)'
                        : 'linear-gradient(180deg,#111132,#505064)',
            }}
        >
            <motion.div className="mountains"></motion.div>
            <motion.div
                className="planets"
                style={{
                    y: yBg,
                    backgroundImage: `url(${
                        type === 'services'
                            ? '/background/planets.png'
                            : '/background/sun.png'
                    })`,
                }}
            ></motion.div>
            <motion.div className="stars" style={{ x: yBg }}></motion.div>
        </section>
    )
}

export default Parallax
