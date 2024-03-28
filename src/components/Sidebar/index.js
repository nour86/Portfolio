'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import Links from './Links'
import ToggleButton from './toggleButton'

const variants = {
    open: {
        clipPath: 'circle(1200px at 3rem 3rem)',
        transition: {
            type: 'spring',
            stiffness: '20',
        },
    },
    closed: {
        clipPath: 'circle(2rem at 3rem 3rem)',
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: '400',
            damping: 40,
        },
    },
}

const useClickOutside = (ref, handler) => {
    const handleClickOutside = useCallback(
        (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handler()
            }
        },
        [ref, handler]
    )

    useEffect(() => {
        const handleDocumentClick = (event) => {
            handleClickOutside(event)
        }

        document.addEventListener('mousedown', handleDocumentClick)

        return () => {
            document.removeEventListener('mousedown', handleDocumentClick)
        }
    }, [handleClickOutside])
}

function Sidebar() {
    const [open, setOpen] = useState(false)
    const MenuExpandRef = useRef(null)

    const closeMenu = () => {
        setOpen(false)
    }

    useClickOutside(MenuExpandRef, closeMenu)

    return (
        // sidebar
        <motion.div
            className=" flex flex-col items-center justify-center z-40 bg-white text-black"
            animate={open ? 'open' : 'closed'}
            initial={false}
            ref={MenuExpandRef}
        >
            {/* background */}
            <motion.div
                className=" z-20 fixed top-0 left-0 bottom-10 h-1/2 sm:h-full w-full sm:w-96 bg-white text-black"
                variants={variants}
            >
                <Links handler={() => setOpen(!open)} />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    )
}

export default Sidebar
