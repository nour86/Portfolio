import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

function Card({ position }) {
    const { x, y } = position
    const cardRef = useRef(null)

    useEffect(() => {
        const rect = cardRef.current.getBoundingClientRect()
        const mouseX = x - rect.left
        const mouseY = y - rect.top
        console.log(mouseX)
        cardRef.current.style.setProperty('--mouse-x', `${mouseX}px`)
        cardRef.current.style.setProperty('--mouse-y', `${mouseY}px`)
    }, [x])

    return (
        <motion.div
            name="card"
            className="card"
            ref={cardRef}
            whileHover={{ opacity: 0.8 }}
        >
            <div className="card-content">
                <div className="card-image">
                    <i className="fa-duotone fa-apartment"></i>
                </div>
                <div className="card-info-wrapper">
                    <div className="card-info">
                        <i className="fa-duotone fa-apartment"></i>
                        <div className="card-info-title">
                            <h3>Apartments</h3>
                            <h4>Places to be apart. Wait, what?</h4>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Card
