'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const TypeWriter = ({ title }) => {
    const [text, setText] = useState(title)
    const ref = useRef()
    const isInView = useInView(ref)
    const name = title
    const letters = '01_'

    useEffect(() => {
        setTimeout(() => {
            let interval = null
            function startTyping(e) {
                let iteration = 0

                clearInterval(interval)

                interval = setInterval(() => {
                    let newText = text
                        .split('')
                        .map((letter, index) => {
                            if (index < iteration) {
                                return name[index]
                            }

                            return letters[Math.floor(Math.random() * 3)]
                        })
                        .join('')
                    setText(newText)

                    if (iteration >= name.length) {
                        clearInterval(interval)
                    }

                    iteration += 1 / 2
                }, 20)
            }
            startTyping()
        }, 100)
        return () => {
            clearTimeout()
        }
    }, [isInView])

    return <motion.span ref={ref}>{text}</motion.span>
}

export default TypeWriter
