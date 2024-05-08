import { useState } from 'react'
import { motion } from 'framer-motion'
import CardShadow from './CardShadow/index.jsx'
import CardContent from './CardContent/index.jsx'

function Card({ title, cover, preview, subtitle, id, setProject }) {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseIn = (e) => {
        setIsHovered((prev) => !prev)
    }
    const handleClick = (e) => {
        setProject(id)
        console.log(id)
    }

    return (
        <motion.article
            name="card"
            className="flex flex-col items-center h-64 w-72 relative cursor-pointer m-2 overflow-hidden rounded-xl bg-cardColor"
            onHoverStart={handleMouseIn}
            onHoverEnd={handleMouseIn}
            onClick={handleClick}
        >
            <CardShadow />
            <CardContent
                isHovered={isHovered}
                title={title}
                cover={cover}
                preview={preview}
                subtitle={subtitle}
            />
        </motion.article>
    )
}

export default Card
