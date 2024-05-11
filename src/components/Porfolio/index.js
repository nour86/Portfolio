'use client'

import React, { useState, useEffect, useRef } from 'react'

import { motion, useScroll, useSpring } from 'framer-motion'

import Project from './Project'
import SectionTitle from '../Section/SectionTitle'

const Portfolio = () => {
    const [jsonData, setJsonData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./data.json')
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                setJsonData(data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    }, [])
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'],
    })
    const scaleX = useSpring(scrollYProgress, { stiffness: 500, damping: 30 })

    return (
        <section
            className="flex flex-col justify-center items-center h-full bg-gradient-to-b
            from-slate-800 to-slate-950"
            id="Portfolio"
        >
            <div
                className="flex flex-col max-w-6xl items-center justify-center relative w-full"
                ref={ref}
            >
                <SectionTitle title="Mes derniers projets">
                    <motion.div
                        style={{ scaleX }}
                        className=" h-1.5 bg-white border-none w-full rounded-full absolute bottom-0 "
                    ></motion.div>
                </SectionTitle>
                <div className="flex flex-col max-w-6xl items-center justify-center relative w-full">
                    {jsonData ? (
                        jsonData.map((project, index) => {
                            return (
                                <Project project={project} key={project.id} />
                            )
                        })
                    ) : (
                        <p> loading...</p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
