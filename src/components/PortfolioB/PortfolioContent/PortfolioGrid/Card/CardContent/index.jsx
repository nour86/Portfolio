import React from 'react'
import { motion } from 'framer-motion'

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
        rotate: 5,
        scale: 0.8,
    },
    hover: {
        opacity: 0.8,
        scale: 1.1,
    },
}

const CardContent = ({ isHovered, title, cover, preview, subtitle }) => {
    return (
        <motion.div
            name="card-content"
            className="flex flex-col w-full rounded-xl flex-grow relative p-xs overflow-hidden z-[2]"
            variants={cardVariants}
        >
            <div
                name="card-image"
                className="flex flex-row items-center w-full h-full justify-center overflow-hidden rounded-xl bg-cardColor"
            >
                <motion.img
                    className="w-10/12 object-fill"
                    src={cover}
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
                        className="flex items-start gap-2 pl-2 "
                    >
                        <div
                            name="card-info-title"
                            className=" text-ellipsis overflow-hidden"
                        >
                            <h3 className="text-lg pt-2 leading-5">{title}</h3>

                            <p className="text-base text-white/50 mt-2">
                                {preview}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default CardContent
