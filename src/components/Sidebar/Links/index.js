import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const items = ['About', 'Services', 'Portfolio', 'Contact']

const variants = {
    open: {
        transition: { staggerChildren: 0.1 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
}

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
}

const Links = ({ handler }) => {
    return (
        <motion.div
            className="absolute w-full h-full flex flex-col items-center justify-center gap-5"
            variants={variants}
        >
            {items.map((item, index) => (
                <motion.a
                    className="text-3xl sm:text-5xl"
                    href={`#${item}`}
                    key={item}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handler}
                >
                    {item}
                </motion.a>
            ))}
            <motion.a
                className="text-2xl sm:text-4xl flex flex-row gap-2 mt-2"
                variants={itemVariants}
                href={'https://github.com/nour86'}
                target="blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                my github
                <Image
                    width={24}
                    height={24}
                    className="h-10 w-10 sm:h-12 sm:w-12 hover:opacity-80 hover:translate-y-1"
                    src="./logos/github.svg"
                />
            </motion.a>
        </motion.div>
    )
}

export default Links
