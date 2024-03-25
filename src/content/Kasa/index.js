import React from 'react'
import Project from '@/components/Porfolio/Project'

const kasa = {
    id: 1,
    title: 'Kaza',
    logo: './sites/pictures/kasa/kasa_logo.svg',
    subtitle: 'lorem ipsum',
    technos: ['html5', 'css3', 'javascript'],
    cover: 'https://picsum.photos/536/354',
    description:
        'Lorem ipsum dolor sit amet consectetur, adipisicingelit. Ad repellendus ipsum hic voluptatibus undequibusdam aspernatur cumque doloremque incidunt. Quiasaepe unde rerum ea tempore consequuntur quis inciduntullam reiciendis!',
    diapo: [
        { title: 'a', img: './sites/pictures/kasa/kasa2.webp' },
        { title: 'b', img: './sites/pictures/kasa/kasa3.webp' },
        { title: 'c', img: './sites/pictures/kasa/kasa4.webp' },
    ],
    repo: 'https://github.com/nour86/booki',
}

const Kasa = () => {
    return (
        <Project project={kasa}>
            <h4 className=" text-7xl text-white">TEST</h4>
        </Project>
    )
}

export default Kasa
