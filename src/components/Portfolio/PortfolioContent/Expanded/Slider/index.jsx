'use client'
import { useEffect, useState } from 'react'
import './style.css'

const Slider = ({ data }) => {
    const pictures = data
    const [index, setIndex] = useState(0)
    console.log(index)

    useEffect(() => {
        const nextCard = setInterval(() => {
            setIndex(index < pictures.length - 1 ? index + 1 : 0)
        }, 3000)
        return () => clearInterval(nextCard)
    }, [index])

    return (
        <>
            {pictures?.map((picture, idx) => (
                <div
                    key={picture.title}
                    className={`w-full h-full left-0 top-0 object-cover flex justify-center items-center absolute ${
                        index === idx ? 'pic_display' : 'pic_hide'
                    }`}
                >
                    <img src={picture.img} alt={picture.title} />
                </div>
            ))}

            <div className="absolute bottom-0 flex justify-center w-full">
                <div className="SlideCard__pagination">
                    {pictures?.map((_, radioIdx) => (
                        <input
                            key={`input-${radioIdx + 1}-${_.title}`}
                            type="radio"
                            name="radio-button"
                            checked={index == radioIdx}
                            className=" w-3 h-3 md:w-4 md:h-4 brightness-75 m-0.5 text-black"
                            readOnly
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Slider
