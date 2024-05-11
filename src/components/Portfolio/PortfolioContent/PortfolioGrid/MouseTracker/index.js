'use client'
import React from 'react'
import { useEffect } from 'react'
import { useMouseContext } from '../../../../utils/MouseContext'

const MouseTrackerActivated = () => {
    const { dispatch } = useMouseContext()

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

const MouseTracker = ({ mouseOver }) => {
    return <>{mouseOver && <MouseTrackerActivated />}</>
}

export default MouseTracker
