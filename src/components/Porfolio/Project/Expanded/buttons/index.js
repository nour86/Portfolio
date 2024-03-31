import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const WebsiteButton = ({ logo, url }) => {
    return (
        <motion.button whileHover={{ scale: 0.9 }}>
            <Link
                className="bg-orange-400 text-black px-3 flex items-center justify-evenly border-none rounded-xl p-3 w-24 sm:w-48 lg:w-60 h-12 cursor-pointer"
                href={url}
                target="blank"
            >
                <p className="hidden sm:inline">Voir</p>
                {logo ? (
                    <img src={logo} className="h-6" alt="logo du site"></img>
                ) : (
                    'le site'
                )}
            </Link>
        </motion.button>
    )
}

export const RepoButton = ({ url }) => {
    return (
        <motion.button whileHover={{ scale: 0.9 }}>
            <Link
                className="bg-orange-400 text-black px-3 flex items-center justify-evenly border-none rounded-xl p-3  w-24 sm:w-48 lg:w-60 h-12 cursor-pointer"
                href={url}
                target="blank"
            >
                <p className="hidden sm:inline">Voir le repo</p>
                <img
                    src="./logos/github.svg"
                    className="h-6 w-6 hover:translate-y-2"
                    alt="logo github"
                ></img>
            </Link>
        </motion.button>
    )
}
