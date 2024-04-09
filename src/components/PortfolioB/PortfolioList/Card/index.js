import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import CardStyle from './CardStyle'

const cardVariants = {}

const textVariants = {
    initial: {
        y: '50px',
    },
    hover: {
        y: '0px',
    },
}
const imageVariants = {
    initial: {
        opacity: 0.5,
        rotate: 10,
        scale: 0.8,
    },
    hover: {
        opacity: 0.8,
    },
}

function Card({ mouseInGrid }) {
    const [cardPosition, setCardPosition] = useState({ left: 0, top: 0 })
    const [isHovered, setIsHovered] = useState(false)
    const cardRef = useRef(null)

    const handleMouseIn = (e) => {
        setIsHovered((prev) => !prev)
    }
    useEffect(() => {
        const rect = cardRef.current.getBoundingClientRect()
        const leftRect = rect.left
        const topRect = rect.top
        setCardPosition({ left: leftRect, top: topRect })
    }, [])

    return (
        <motion.div
            name="card"
            className="flex flex-col items-center h-64 w-72 relative cursor-pointer overflow-hidden rounded-xl bg-cardColor"
            ref={cardRef}
            onHoverStart={handleMouseIn}
            onHoverEnd={handleMouseIn}
            variants={cardVariants}
            whileHover="hover"
            // onMouseMove={handleMouseMove}
        >
            <CardStyle cardPosition={cardPosition} mouseInGrid={mouseInGrid} />
            <motion.div
                name="card-content"
                className="flex flex-col w-full rounded-xl flex-grow relative p-xs overflow-hidden z-[2]"
            >
                <div
                    name="card-image"
                    className="flex flex-row items-center w-full h-full justify-center overflow-hidden rounded-xl bg-cardColor"
                >
                    <motion.img
                        className="w-10/12 object-fill"
                        src="/sites/pictures/Kasa/kasacover.webp"
                        variants={imageVariants}
                        animate={isHovered ? 'hover' : 'initial'}
                    ></motion.img>
                </div>
                <motion.div className=" overflow-hidden absolute flex flex-col w-[calc(100%-2px)] justify-center items-center box-border  bottom-[1px] p-xs rounded-b-xl">
                    <motion.div
                        name="card-info-wrapper"
                        variants={textVariants}
                        animate={isHovered ? 'hover' : 'initial'}
                        className={`"flex justify-start w-full relative rounded-b-xl box-border items-center bg-cardColor h-32 
                    } flex-grow overflow-hidden text-ellipsis "`}
                    >
                        <div
                            name="card-info"
                            className="flex items-start gap-2 "
                        >
                            <div name="card-info-title">
                                <h3 className="text-lg leading-5">
                                    Apartments
                                </h3>
                                <h4 className="text-base text-white/50 mt-2">
                                    Places to be apart. Wait,
                                </h4>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Card
