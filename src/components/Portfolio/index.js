'use client'

import React, { useState, useEffect, useRef } from 'react'

import { useScroll, useSpring } from 'framer-motion'
import { MousePositionProvider } from '../utils/MouseContext'
import PortfolioContent from './PortfolioContent'
import Section from '../Section'
import SectionTitle from '../Section/SectionTitle'
import SectionContent from '../Section/SectionContent'

const Portfolio = () => {
    const [jsonData, setJsonData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./data.json')
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                setJsonData(data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    }, [])
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'start start'],
    })
    const scaleX = useSpring(scrollYProgress, { stiffness: 500, damping: 30 })

    return (
        <MousePositionProvider>
            <Section id="Portfolio" gradient="down">
                <SectionTitle title="Mes derniers projets" />
                <SectionContent>
                    {jsonData ? (
                        <PortfolioContent projects={jsonData} />
                    ) : (
                        <h3> loading Projects...</h3>
                    )}
                </SectionContent>
            </Section>
        </MousePositionProvider>
    )
}

export default Portfolio
