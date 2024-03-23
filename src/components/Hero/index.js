import React from 'react'
import { motion } from 'framer-motion'

import './style.css'

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
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>Nour Alchami</motion.h2>
                    <motion.h1 variants={textVariants}>
                        Developer and designer
                    </motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>
                            see the latest works
                        </motion.button>
                        <motion.button variants={textVariants}>
                            Contact
                        </motion.button>
                    </motion.div>
                    <motion.img
                        variants={textVariants}
                        src="/scroll.png"
                        alt=""
                    ></motion.img>
                </motion.div>
            </div>
            <div className="slidingTextContainer">
                Writer Content Creator Influencer
            </div>
            <div className="imageContainer">
                <img src="/hero.png" alt="bonne tete de vainqueur"></img>
            </div>
        </div>
    )
}

export default Hero
