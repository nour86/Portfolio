'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import DisplayTechnos from './DisplayTechnos'
import SectionTitle from '../Section/SectionTitle'
import SectionContent from '../Section/SectionContent'
import Section from '../Section'

const variants = {
    initial: {
        x: -500,
        opacity: 0,
        y: 100,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
}

const technoVariants = {
    initial: {
        x: 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            type: 'spring',
            stiffness: '400',
            damping: 60,
        },
    },
}

const used = ['html5', 'css3', 'javascript', 'reactjs']
const workedWith = ['nextjsdark', 'tailwind', 'nodejs', 'mongodb']
const tools = ['git', 'githubdark', 'sass']

const About = () => {
    const ref = useRef()
    const isInView = useInView(ref, { margin: '-200px' })

    return (
        <Section id="About" gradient="up">
            {/* for position ref */}
            <div className=" absolute w-full top-1/2 h-10 " ref={ref}></div>

            <SectionTitle title="A propos de moi" />
            <SectionContent>
                <motion.div
                    className="flex flex-col absolute items-center justify-start overflow-auto max-h-full sm:no-scrollbar bg-transparent p-3 sm:p-10 "
                    // className="h-5/6 max-w-7xl flex flex-col items-center bg-blue-400 justify-start bg-transparent overflow-auto p-3 sm:p-10 "
                    variants={variants}
                    initial="initial"
                    animate={isInView && 'animate'}
                >
                    <motion.div
                        name="titleContainer"
                        className="flex flex-1 flex-col w-full items-center md:items-start "
                        variants={variants}
                    >
                        <motion.div className="flex items-start px-5 gap-6 sm:gap-12">
                            <h1 className=" text-2xl sm:text-4xl text-center sm:text-left font-extralight">
                                <motion.strong
                                    className="text-4xl sm:text-6xl text-white"
                                    whileHover={{ color: 'orange' }}
                                >
                                    Développeur web{' '}
                                </motion.strong>
                                junior <br className="hidden sm:flex" />
                                <motion.strong
                                    className="text-4xl sm:text-6xl text-white"
                                    whileHover={{ color: 'orange' }}
                                >
                                    Passionné
                                </motion.strong>{' '}
                                par l'UI/UX design
                            </h1>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="flex-2 flex flex-col justify-center items-center  max-w-7xl"
                        variants={variants}
                    >
                        <motion.div className="  flex-1 flex flex-col sm:flex-row max-w-6xl justify-between">
                            <motion.div className="flex-1 px-5 leading-relaxed my-3 bg-transparent hidden sm:flex sm:flex-col">
                                <p className="my-3">
                                    Après une première carrière dans le contrôle
                                    de gestion, suivie de plusieurs années à
                                    l'étranger dans le secteur humanitaire, je
                                    suis de retour à Paris et je me lance dans
                                    le développement web.
                                </p>
                                <p className="my-3">
                                    J'ai suivi la formation certifiante
                                    intégrateur web d'OpenClassRooms (bac+2) au
                                    cours de laquelle j'ai acquis de solides
                                    compétences en HTML, CSS, JavaScript et
                                    React.
                                </p>
                                <p className="my-3">
                                    Lorsque je ne suis pas devant mon écran à
                                    potasser des tutos de code ou à tenter de
                                    résoudre des énigmes sur codewars, j'aime
                                    jouer aux échecs avec mes potes ou exprimer
                                    ma créativité en travaillant le bois
                                    (#low-tech)
                                </p>
                                <p className="my-3">
                                    Toujours enthousiaste à l'idée d'apprendre,
                                    je suis à l'écoute de nouvelles opportunités
                                    dans le monde du développement web
                                </p>
                            </motion.div>
                            <motion.div
                                className=" p-5 w-full sm:max-w-80 float-right border-solid flex flex-col items-end text-end"
                                variants={technoVariants}
                            >
                                <motion.div variants={technoVariants}>
                                    <h2>Les technos que j'utilise</h2>
                                    <motion.div
                                        className="flex m-3"
                                        variants={technoVariants}
                                        initial="initial"
                                        animate={isInView && 'animate'}
                                    >
                                        <DisplayTechnos
                                            array={used}
                                            style="flex justify-center justify-items-center bg-transparent gap-4"
                                        />
                                    </motion.div>
                                </motion.div>
                                <motion.div variants={technoVariants}>
                                    <h2>j'ai aussi pu travailler avec </h2>
                                    <motion.div
                                        className="flex m-3"
                                        variants={technoVariants}
                                        initial="initial"
                                        animate={isInView && 'animate'}
                                    >
                                        <DisplayTechnos
                                            array={workedWith}
                                            style="flex justify-center justify-items-center bg-transparent gap-4 "
                                        />
                                    </motion.div>
                                </motion.div>
                                <motion.div variants={technoVariants}>
                                    <h2>mes outils </h2>
                                    <motion.div
                                        className="flex m-3"
                                        variants={technoVariants}
                                        initial="initial"
                                        animate={isInView && 'animate'}
                                    >
                                        <DisplayTechnos
                                            array={tools}
                                            style="flex justify-center justify-items-center bg-transparent gap-4 "
                                        />
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <div className="flex justify-between  p-5 border-solid w-full gap-9">
                            <a href="/#Contact">
                                <motion.button
                                    aria-label="contactez moi"
                                    whileHover={{
                                        scale: 0.9,
                                        color: 'black',
                                        background: 'white',
                                    }}
                                    className=" p-5 border-2 border-solid border-white rounded-xl bg text-white cursor-pointer z-10"
                                >
                                    Ecrivez moi
                                </motion.button>
                            </a>
                            <a
                                href={'https://github.com/nour86'}
                                target="blank"
                            >
                                <motion.button
                                    aria-label="lien vers mon github"
                                    whileHover={{
                                        scale: 0.9,
                                        color: 'black',
                                        background: 'white',
                                    }}
                                    className=" p-5 border-2 border-solid border-white rounded-xl bg text-white cursor-pointer z-10"
                                >
                                    ma page Github
                                </motion.button>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </SectionContent>
        </Section>
    )
}

export default About
