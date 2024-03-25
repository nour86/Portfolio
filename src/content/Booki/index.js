'use client'
import React from 'react'
import Project from '@/components/Porfolio/Project'
import TechnoUsed from '@/components/Porfolio/Project/TechnoUsed'

const booki = {
    id: 2,
    title: 'Booki',
    logo: './sites/pictures/booki/booki_logo.svg',
    subtitle:
        "OpenClassrooms P3 - Création de la page d'accueil d'une agence de voyage avec HTML & CSS",

    technos: ['html5', 'css3', 'javascript'],
    cover: 'https://picsum.photos/id/237/536/354',
    description:
        'Lorem ipsum dolor sit amet consectetur, adipisicingelit. Ad repellendus ipsum hic voluptatibus undequibusdam aspernatur cumque doloremque incidunt. Quiasaepe unde rerum ea tempore consequuntur quis inciduntullam reiciendis!',
    diapo: [
        { title: 'z', img: './sites/pictures/booki/booki1.webp' },
        { title: 'a', img: './sites/pictures/booki/booki2.webp' },
        { title: 'b', img: './sites/pictures/booki/booki3.webp' },
    ],
    repo: 'https://github.com/nour86/booki',
    website: 'https://nour86.github.io/booki/',
}

const Booki = () => {
    return (
        <Project project={booki}>
            <div className="flex flex-col h-full justify-between gap-6">
                <h3 className="text-2xl md:text-4xl">{booki.subtitle}</h3>
                <TechnoUsed technos={booki.technos} />
                <div className=" flex md:flex-row w-full justify-between  align-top">
                    <p className="flex flex-1  text-1xl md:text-2xl">
                        Booki est un site Internet qui permet aux usagers de
                        trouver des hébergements et des activités dans la ville
                        de leur choix.
                        <br /> L'objectif est d'intégrer l'interface du site
                        avec du code HTML et CSS, à partir de maquettes Figma.
                    </p>
                </div>
            </div>
        </Project>
    )
}

export default Booki
