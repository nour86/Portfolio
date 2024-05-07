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
        dispatch({ type: 'mouseIn' })

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            dispatch({ type: 'mouseOut' })
        }
    }, [])
    return <></>
}

export default MouseTracker
