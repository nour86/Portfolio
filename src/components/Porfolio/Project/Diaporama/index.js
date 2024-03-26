'use client'
import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const variants = {
    initial: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            // scale: 0.5,
        }
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            x: { type: 'spring', stiffness: 200, damping: 30 },
            opacity: { duration: 0.5 },
        },
    },
    exit: (direction) => {
        return {
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
            transition: {
                x: { type: 'spring', stiffness: 200, damping: 30 },
                opacity: { duration: 0.5 },
            },
        }
    },
}

const Diaporama = ({ pictures }) => {
    const images = pictures

    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    function nextStep() {
        setDirection(1)
        if (index === images.length - 1) {
            setIndex(0)
            return
        }
        setIndex(index + 1)
    }

    function prevStep() {
        setDirection(-1)
        if (index === 0) {
            setIndex(images.length - 1)
            return
        }
        setIndex(index - 1)
    }

    return (
        <>
            <div className="w-full h-[30vw] flex self-center items-center justify-center object-contain relative overflow-hidden bg-red-300 rounded-lg p-3">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        variants={variants}
                        animate="animate"
                        initial="initial"
                        exit="exit"
                        src={images[index].img}
                        alt="slides"
                        className="absolute h-[30vw] object-cover m-auto self-center bg-red-900 rounded-xl"
                        key={index}
                        custom={direction}
                    />
                </AnimatePresence>
            </div>
            <motion.button
                onClick={prevStep}
                className="w-10 h-12 rounded-md bg-yellow-500 border-none text-black absolute bottom-1/2 -left-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                ◀
            </motion.button>
            <motion.button
                className="w-10 h-12 rounded-md bg-yellow-500 border-none text-black absolute bottom-1/2 -right-2"
                onClick={nextStep}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                ▶
            </motion.button>
        </>
    )
}
export default Diaporama
