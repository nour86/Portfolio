export const myProjects = [
    {
        id: 1,
        title: 'Booki',
        logo: './sites/pictures/booki/booki_logo.svg',
        cover: 'https://picsum.photos/id/237/536/354',
        preview:
            "Création de la page d'accueil d'une agence de voyage avec HTML & CSS",
        subtitle:
            "OpenClassrooms P3 - Création de la page d'accueil d'une agence de voyage avec HTML & CSS",
        diapo: [
            { title: 'cover', img: './sites/pictures/booki/bookicover.webp' },
            { title: 'picture 1', img: './sites/pictures/booki/booki2.webp' },
            { title: 'picture 2', img: './sites/pictures/booki/booki3.webp' },
            { title: 'picture 3', img: './sites/pictures/booki/booki4.webp' },
        ],
        technos: ['html5', 'css3'],
        description: [
            'premier paragraphe',
            'second paragraphe',
            'troisième paragraphe',
        ],
        repo: 'https://github.com/nour86/booki',
        website: 'https://nour86.github.io/booki/',
    },
    {
        id: 2,
        title: 'Kaza',
        logo: './sites/pictures/kasa/kasa_logo.svg',
        cover: './sites/pictures/kasa/kasacover.webp',
        preview: 'Créer une application avec React',
        subtitle:
            "OpenClassRoom projet - 8 Développer l'ensemble de l'application en utilisant : ",
        technos: ['html5', 'css3', 'javascript', 'reactjs'],
        diapo: [
            { title: 'cover', img: './sites/pictures/kasa/kasacover.webp' },
            { title: 'picture 1', img: './sites/pictures/kasa/kasa1.webp' },
            { title: 'picture 2', img: './sites/pictures/kasa/kasa2.webp' },
            { title: 'picture 3', img: './sites/pictures/kasa/kasa3.webp' },
            { title: 'picture 4', img: './sites/pictures/kasa/kasa4.webp' },
        ],
        description: [
            'logique de components React',
            'utilisation des hooks useState, useEffect, useContext',
            "Gestion des routes de l'application avec React router",
            'conditional rendering',
            'animation css et @mixin pour le responsive design',
        ],
        repo: 'https://github.com/nour86/Kasa',
    },
    {
        id: 3,
        title: 'ohmyfood',
        logo: './sites/pictures/ohmyfood/ohmyfood_logo.svg',
        cover: './sites/pictures/ohmyfood/ohmyfoodcover.webp',
        preview:
            'Développer un site mobile first qui répertorie les menus de restaurants gastronomiques',
        subtitle: 'OpenClassRoom projet 4 - développer un site mobile first : ',
        technos: ['html5', 'css3', 'sass'],
        diapo: [
            {
                title: 'cover',
                img: './sites/pictures/ohmyfood/ohmyfoodcover.webp',
            },
            {
                title: 'picture 1',
                img: './sites/pictures/ohmyfood/ohmyfood1.webp',
            },
            {
                title: 'picture 2',
                img: './sites/pictures/ohmyfood/ohmyfood2.webp',
            },
            {
                title: 'picture 3',
                img: './sites/pictures/ohmyfood/ohmyfood3.webp',
            },
        ],
        description: [
            'mobile first',
            'animations CSS (ouverture, hover, checked)',
            "réalisation du loader à l'aide des keyframes",
        ],
        repo: 'https://github.com/nour86/ohmyfood',
        website: 'https://nour86.github.io/Ohmyfood/',
    },
    {
        id: 4,
        title: 'sophie buel',
        logo: './sites/pictures/sophie_bluel/sophiebluel_logo.svg',
        cover: './sites/pictures/sophie_bluel/sophiebluelcover.webp',
        preview: "Conception du site portfolio d'une architecte d'intérieur",
        subtitle:
            'OpenClassRoom projet 6 - créer une page web dynamique avec JavaScript ',
        technos: ['html5', 'css3', 'javascript'],
        diapo: [
            {
                title: 'cover',
                img: './sites/pictures/sophie_bluel/sophiebluelcover.webp',
            },
            {
                title: 'picture 1',
                img: './sites/pictures/sophie_bluel/sophiebluel1.webp',
            },
            {
                title: 'picture 2',
                img: './sites/pictures/sophie_bluel/sophiebluel2.webp',
            },
            {
                title: 'picture 3',
                img: './sites/pictures/sophie_bluel/sophiebluel3.webp',
            },
        ],
        description: [
            'créer la page de présentation des travaux',
            "coder la page de connexion de l'administrateur du site (le client)",
            "implémenter une fen^tre modale permettant au client d'ajouter et de supprimer des projets",
        ],
        repo: 'https://github.com/nour86/portfolio_frontend',
    },
    {
        id: 5,
        title: 'Nina Carducci',
        logo: './sites/pictures/nina_carducci/nina_logo.svg',
        cover: './sites/pictures/nina_carducci/ninacover.webp',
        preview: "Optimiser le référencement du site d'une photographe",
        subtitle:
            "OpenClassRoom projet 9 - Utiliser les audits Lighthouse et Wave pour optimiser les performances d'un site ",
        technos: ['html5', 'css3', 'javascript'],
        diapo: [
            {
                title: 'cover',
                img: './sites/pictures/nina_carducci/ninacover.webp',
            },
            {
                title: 'picture 1',
                img: './sites/pictures/nina_carducci/nina1.webp',
            },
            {
                title: 'picture 2',
                img: './sites/pictures/nina_carducci/nina2.webp',
            },
            {
                title: 'picture 3',
                img: './sites/pictures/nina_carducci/nina3.webp',
            },
            {
                title: 'picture 4',
                img: './sites/pictures/nina_carducci/nina4.webp',
            },
        ],
        description: [
            'redimensionnement des images',
            'optimisation des scripts (lazyload et defer)',
            'Accessibilité optimisée (balises html appropriées, correction du contraste, ajout de descriptions alternatives sur les images et de labels sur les champs du formulaire)',
            "ajout d'un google rich snippet",
        ],
        repo: 'https://github.com/nour86/nina_carducci',
    },
    {
        id: 6,
        title: 'Argent Bank',
        logo: './sites/pictures/argent_bank/argentbank_logo.svg',
        cover: './sites/pictures/argent_bank/argentbankcover.webp',
        preview: "implémenter le Front-End d'une application avec React",
        subtitle:
            "OpenClassRoom projet 11 - Utiliser Redux et connecter l'application à une base NoSql ",
        technos: ['html5', 'css3', 'sass', 'reactjs', 'mongodb'],
        diapo: [
            {
                title: 'cover',
                img: './sites/pictures/argent_bank/argentbankcover.webp',
            },
            {
                title: 'picture 1',
                img: './sites/pictures/argent_bank/argentbank1.webp',
            },
            {
                title: 'picture 2',
                img: './sites/pictures/argent_bank/argentbank2.webp',
            },
            {
                title: 'picture 3',
                img: './sites/pictures/argent_bank/argentbank3.webp',
            },
        ],
        description: [
            "Mise en place de l'application et intégration des maquettes",
            'Gestionnaire de state avec Redux presist',
            'Gestion de la connexion des utilisateurs et de la modification des leurs infos',
            'Formulaire dinscription avec gestion des erreurs potentielles',
            "Définition des endpoints de l'API et rédaction du swagger",
        ],
        repo: 'https://github.com/nour86/Argent_bank',
    },
]
