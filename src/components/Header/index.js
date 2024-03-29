'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

function Header() {
    return (
        <header className="h-24 relative top-24 z-10 flex justify-end lg:justify-center bg-slate-800 ">
            <div className=" w-3/4 flex flex-row items-center justify-between px-6 h-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className=" left-16 font-bold"
                >
                    Nour Dev
                </motion.div>
                <div className="icons flex gap-5 ">
                    <a href="https://github.com/nour86" target="blank">
                        <Image
                            src="/logos/githubdark.svg"
                            width={24}
                            height={24}
                            alt="logo github"
                        />
                    </a>
                    <a
                        href="https://www.codewars.com/users/roun86"
                        target="blank"
                    >
                        <Image
                            src="/logos/codewars.svg"
                            width={24}
                            height={24}
                            alt=" logo codewar"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nour-alchami-21b10a221/"
                        target="blank"
                    >
                        <Image
                            src="/logos/linkedin.svg"
                            width={24}
                            height={24}
                            alt="logo linkedin"
                        />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header
