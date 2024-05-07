import { useState } from 'react'
import { motion } from 'framer-motion'
import CardShadow from './CardShadow/index.jsx'
import CardContent from './CardContent/index.jsx'

function Card({ title, cover, preview, subtitle }) {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseIn = (e) => {
        setIsHovered((prev) => !prev)
    }

    return (
        <motion.div
            name="card"
            className="flex flex-col items-center h-64 w-72 relative cursor-pointer overflow-hidden rounded-xl bg-cardColor"
            onHoverStart={handleMouseIn}
            onHoverEnd={handleMouseIn}
        >
            <CardShadow />
            <CardContent
                isHovered={isHovered}
                title={title}
                cover={cover}
                preview={preview}
                subtitle={subtitle}
            />
        </motion.div>
    )
}

export default Card
