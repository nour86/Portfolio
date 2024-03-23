'use client'

import './style.css'
import { motion } from 'framer-motion'

function Test() {
    return (
        <div className="course">
            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                // animate={{ opacity: 1, scale: 1, x: 200, y: 200 }}
                transition={{ duration: 2 }}
                whileTap={{ scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 2 }}
                drag
            ></motion.div>
        </div>
    )
}

export default Test
