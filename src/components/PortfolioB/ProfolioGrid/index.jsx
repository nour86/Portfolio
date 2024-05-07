import React, { useState, useReducer } from 'react'
import './style.css'
import Card from './Card/index.jsx'

import { useMouseContext } from '../MouseContext'
import MouseTracker from './MouseTracker'

const PortfolioGrid = () => {
    const { state, dispatch } = useMouseContext()

    return (
        <>
            <div
                id="cards"
                name="cards-grid"
                className=" h-full w-[calc(100%-20px)] max-w-5xl self-center m-auto  flex flex-wrap relative gap-2 opacity-100 p-4"
                onMouseEnter={() => dispatch({ type: 'mouseIn' })}
                onMouseLeave={() => dispatch({ type: 'mouseOut' })}
            >
                {state.mouseInGrid && <MouseTracker />}

                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default PortfolioGrid
