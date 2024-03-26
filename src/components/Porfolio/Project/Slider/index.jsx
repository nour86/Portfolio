'use client'
import { useEffect, useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import './style.css'

// import './style.scss'

const Slider = ({ data }) => {
    const pictures = data
    const [index, setIndex] = useState(0)
    console.log(index)

    useEffect(() => {
        const nextCard = setInterval(() => {
            setIndex(index < pictures.length - 1 ? index + 1 : 0)
        }, 5000)
        return () => clearInterval(nextCard)
    })

    return (
        <div className="relative w-full h-[500px] object-cover overflow-hidden">
            {pictures?.map((picture, idx) => (
                <motion.div
                    key={picture.title}
                    className={`w-full left-0 top-0 object-cover absolute ${
                        index === idx ? 'pic_display' : 'pic_hide'
                    }`}
                >
                    <img src={picture.img} alt={picture.title} />
                </motion.div>
            ))}

            <div className="absolute bottom-9 flex justify-center w-full">
                <div className="SlideCard__pagination">
                    {pictures?.map((_, radioIdx) => (
                        <input
                            key={`input-${radioIdx + 1}-${_.title}`}
                            type="radio"
                            name="radio-button"
                            checked={index == radioIdx}
                            className=" w-4 h-4 text-black"
                            readOnly
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slider
