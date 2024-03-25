import React from 'react'
import Project from '@/components/Porfolio/Project'

const ohmyfood = {
    id: 3,
    title: 'Oh My Food',
    logo: './sites/pictures/ohmyfood/ohmyfood_logo.svg',
    subtitle: 'lorem ipsum',
    technos: ['html5', 'css3', 'javascript'],
    cover: 'https://picsum.photos/seed/picsum/536/354',
    description:
        'Lorem ipsum dolor sit amet consectetur, adipisicingelit. Ad repellendus ipsum hic voluptatibus undequibusdam aspernatur cumque doloremque incidunt. Quiasaepe unde rerum ea tempore consequuntur quis inciduntullam reiciendis!',
    diapo: [
        { title: 'a', img: './sites/pictures/ohMyFood/ohmyfood2.webp' },
        { title: 'b', img: './sites/pictures/ohMyFood/ohmyfood3.webp' },
        { title: 'c', img: './sites/pictures/ohMyFood/ohmyfood4.webp' },
    ],
    repo: 'https://github.com/nour86/booki',
    website: 'https://nour86.github.io/booki/',
}

const Ohmyfood = () => {
    return (
        <Project project={ohmyfood}>
            <h3>TEST</h3>
        </Project>
    )
}

export default Ohmyfood
