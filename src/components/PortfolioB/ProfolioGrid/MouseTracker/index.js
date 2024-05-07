'use client'
import React from 'react'
import { useEffect } from 'react'
import { useMouseContext } from '../../MouseContext'

const MouseTracker = () => {
    const { state, dispatch } = useMouseContext()

    useEffect(() => {
        const handleMouseMove = (event) => {
            dispatch({
                type: 'mousePosition',
                payload: { clientX: event.clientX, clientY: event.clientY },
            })
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])
    return <></>
}

export default MouseTracker
