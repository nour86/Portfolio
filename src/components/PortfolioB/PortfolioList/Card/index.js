import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import CardStyle from './CardStyle'

function Card({ mousePosition, mouseInGrid }) {
    const [cardPosition, setCardPosition] = useState({ left: 0, top: 0 })
    const cardRef = useRef(null)

    useEffect(() => {
        const rect = cardRef.current.getBoundingClientRect()
        const leftRect = rect.left
        const topRect = rect.top
        setCardPosition({ left: leftRect, top: topRect })
    }, [])

    return (
        <motion.div
            name="card"
            className="flex flex-col h-64 w-72 relative cursor-pointer overflow-hidden rounded-xl bg-cardColor"
            ref={cardRef}
            // onMouseMove={handleMouseMove}
        >
            <CardStyle cardPosition={cardPosition} mouseInGrid={mouseInGrid} />
            <div
                name="card-content"
                className="flex flex-col rounded-xl flex-grow inset-xs p-3 absolute overflow-hidden bg-cardColor z-[2]"
            >
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
