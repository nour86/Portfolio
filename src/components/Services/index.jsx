'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import './style.css'

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

const Services = () => {
    const ref = useRef()
    const isInView = useInView(ref, { margin: '-200px' })

    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            animate={isInView && 'animate'}
            ref={ref}
        >
            <div className="textContainer" variants={variants}>
                <p>
                    I focus on helping your brand grow
                    <br />
                    and move forward
                </p>
                <hr />
            </div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="people" />

                    <h2>
                        <motion.b whileHover={{ color: 'orange' }}>
                            Unique
                        </motion.b>{' '}
                        Idead
                    </h2>
                </div>
                <div className="title">
                    <h2>
                        <motion.b whileHover={{ color: 'orange' }}>
                            For your
                        </motion.b>{' '}
                        Business
                    </h2>
                    <button>What we DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div
                    className="box"
                    whileHover={{ background: 'lightgray', color: 'black' }}
                >
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ad repellendus ipsum hic voluptatibus unde
                        quibusdam aspernatur cumque doloremque incidunt. Quia
                        saepe unde rerum ea tempore consequuntur quis incidunt
                        ullam reiciendis!
                    </p>
                    <button>Go!</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: 'lightgray', color: 'black' }}
                >
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ad repellendus ipsum hic voluptatibus unde
                        quibusdam aspernatur cumque doloremque incidunt. Quia
                        saepe unde rerum ea tempore consequuntur quis incidunt
                        ullam reiciendis!
                    </p>
                    <button>Go!</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: 'lightgray', color: 'black' }}
                >
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ad repellendus ipsum hic voluptatibus unde
                        quibusdam aspernatur cumque doloremque incidunt. Quia
                        saepe unde rerum ea tempore consequuntur quis incidunt
                        ullam reiciendis!
                    </p>
                    <button>Go!</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: 'lightgray', color: 'black' }}
                >
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ad repellendus ipsum hic voluptatibus unde
                        quibusdam aspernatur cumque doloremque incidunt. Quia
                        saepe unde rerum ea tempore consequuntur quis incidunt
                        ullam reiciendis!
                    </p>
                    <button>Go!</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services
