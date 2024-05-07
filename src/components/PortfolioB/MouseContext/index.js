import { createContext, useContext, useReducer } from 'react'

// Create a context to hold the state
const MouseContext = createContext()

// Define the initial state
export const mouseInitialState = {
    mouseInGrid: false,
    mousePosition: { x: 0, y: 0 },
}

// Define the reducer function to handle state transitions
const mouseReducer = (state, action) => {
    switch (action.type) {
        case 'mouseIn':
            return { ...state, mouseInGrid: true }
        case 'mouseOut':
            return { ...state, mouseInGrid: false }
        case 'mousePosition':
            return {
                ...state,
                mousePosition: {
                    x: action.payload.clientX,
                    y: action.payload.clientY,
                },
            }
        default:
            return state
    }
}

export const MousePositionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(mouseReducer, mouseInitialState)

    return (
        <MouseContext.Provider value={{ state, dispatch }}>
            {children}
        </MouseContext.Provider>
    )
}

export const useMouseContext = () => {
    return useContext(MouseContext)
}
