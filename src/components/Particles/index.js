import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim' // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { useState, useEffect } from 'react'
import config from './config'

const ParticlesBackground = () => {
    const [init, setInit] = useState(false)

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine)
            //await loadBasic(engine);
        }).then(() => {
            setInit(true)
        })
    }, [])

    const particlesLoaded = (container) => {
        console.log(container)
    }

    return (
        // <Particles
        //     particlesLoaded={particlesLoaded}
        //     options={config}
        // ></Particles>
        init && (
            <Particles
                id="tsparticles"
                // particlesLoaded={particlesLoaded}
                options={config}
            />
        )
    )
}
export default ParticlesBackground
