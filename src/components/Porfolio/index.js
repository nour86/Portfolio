'use client'

import React, { useRef } from 'react'
import Project from './Project'

import { motion, useScroll, useSpring } from 'framer-motion'

const items = [
    {
        id: 1,
        title: 'Kaza',
        img: 'https://picsum.photos/536/354',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicingelit. Ad repellendus ipsum hic voluptatibus undequibusdam aspernatur cumque doloremque incidunt. Quiasaepe unde rerum ea tempore consequuntur quis inciduntullam reiciendis!',
        diapo: [
            { title: 'a', img: './sites/pictures/booki/booki2.webp' },
            { title: 'b', img: './sites/pictures/booki/booki3.webp' },
            { title: 'c', img: './sites/pictures/booki/booki4.webp' },
        ],
    },
    {
        id: 2,
        title: 'Booki',
        img: 'https://picsum.photos/id/237/536/354',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicingelit. Ad repellendus ipsum hic voluptatibus undequibusdam aspernatur cumque doloremque incidunt. Quiasaepe unde rerum ea tempore consequuntur quis inciduntullam reiciendis!',
        diapo: [
            { title: 'a', img: './sites/pictures/kasa/kasa2.webp' },
            { title: 'b', img: './sites/pictures/kasa/kasa3.webp' },
            { title: 'c', img: './sites/pictures/kasa/kasa4.webp' },
        ],
    },
    {
        id: 3,
        title: 'Nina',
        img: 'https://picsum.photos/seed/picsum/536/354',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicingelit. Ad repellendus ipsum hic voluptatibus undequibusdam aspernatur cumque doloremque incidunt. Quiasaepe unde rerum ea tempore consequuntur quis inciduntullam reiciendis!',
        diapo: [
            { title: 'a', img: './sites/pictures/booki/booki2.webp' },
            { title: 'b', img: './sites/pictures/booki/booki3.webp' },
            { title: 'c', img: './sites/pictures/booki/booki4.webp' },
        ],
    },
]

const Portfolio = () => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'start start'],
    })
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

    return (
        <div className="relative w-full" ref={ref}>
            <div className="sticky top-0 left-0 pt-8 text-center text-orange-400 text-6xl z-30">
                <h2>My WOrks</h2>
                <motion.div
                    style={{ scaleX }}
                    className=" h-1.5 bg-white border-none rounded-full mt-2"
                ></motion.div>
            </div>
            {items.map((item) => (
                <Project project={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio
