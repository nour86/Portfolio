import React from 'react'

const Section = ({ children, id, gradient }) => {
    return (
        <section
            id={id}
            className={`relative min-h-screen w-full flex flex-col items-center justify-start snap-start ${
                gradient == 'down' ? 'bg-gradient-to-b' : 'bg-gradient-to-t'
            } from-slate-950 to-slate-800`}
        >
            {children}
        </section>
    )
}

export default Section
