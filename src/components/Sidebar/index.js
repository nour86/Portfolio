'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Links from './Links'
import ToggleButton from './toggleButton'

const variants = {
    open: {
        clipPath: 'circle(1200px at 50px 50px)',
        transition: {
            type: 'spring',
            stiffness: '20',
        },
    },
    closed: {
        clipPath: 'circle(30px at 50px 50px)',
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: '400',
            damping: 40,
        },
    },
}

function Sidebar() {
    const [open, setOpen] = useState(false)

    return (
        // sidebar
        <motion.div
            className="sidebar flex flex-col items-center justify-center bg-white text-black"
            animate={open ? 'open' : 'closed'}
        >
            {/* background */}
            <motion.div
                className="background z-50 fixed top-0 left-0 bottom-0 w-96 bg-white text-black"
                variants={variants}
            >
                <Links />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    )
}

export default Sidebar
