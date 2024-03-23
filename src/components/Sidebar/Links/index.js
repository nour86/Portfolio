import React from 'react'
import { motion } from 'framer-motion'

const items = ['About', 'Services', 'Technologies', 'Portfolio', 'Contact']

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

const Links = () => {
    return (
        <motion.div
            className="absolute w-full h-full flex flex-col items-center justify-center gap-5"
            variants={variants}
        >
            {items.map((item, index) => (
                <motion.a
                    className="text-5xl"
                    href={`#${item}`}
                    key={item}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {item}
                </motion.a>
            ))}
        </motion.div>
    )
}

export default Links
