'use client'

import React, { useState } from 'react'
import Section from '../../Section'
import SectionTitle from '../../Section/SectionTitle'
import SectionContent from '../../Section/SectionContent'

const TypeWriter = ({ title }) => {
    const [text, setText] = useState(title)
    const name = title
    const letters = 'abcdefghijklmnopqrstuvwxyz123456789 '

    let interval = null

    function launch(e) {
        let iteration = 0

        clearInterval(interval)

        interval = setInterval(() => {
            let newText = text
                .split('')
                .map((letter, index) => {
                    if (index < iteration) {
                        return name[index]
                    }

                    return letters[Math.floor(Math.random() * 36)]
                })
                .join('')
            setText(newText)

            if (iteration >= name.length) {
                clearInterval(interval)
            }

            iteration += 1 / 3
        }, 30)
    }

    return (
        <Section id="TypeWriter" gradient="up">
            <SectionTitle title="test" />
            <SectionContent>
                <div
                    className="testScreen w-60 h-40 flex flex-col justify-center items-center bg-blue-500"
                    onMouseEnter={() => launch()}
                >
                    <h2>{text}</h2>
                </div>
            </SectionContent>
        </Section>
    )
}

export default TypeWriter
