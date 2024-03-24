'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Sidebar from '../Sidebar'

function Navbar() {
    return (
        <div className="h-24 flex justify-between">
            <Sidebar />
            <div className=" w-full max-w-7xl m-auto px-40 flex flex-row items-center justify-between h-full">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="name font-bold"
                >
                    Nour Dev
                </motion.span>
                <div className="icons flex gap-5 ">
                    <a href="#">
                        <Image
                            src="/facebook.png"
                            width={18}
                            height={18}
                            alt="logo facebook"
                        />
                    </a>
                    <a href="#">
                        <Image
                            src="/youtube.png"
                            width={18}
                            height={18}
                            alt=""
                        />
                    </a>
                    <a href="#">
                        <Image
                            src="/instagram.png"
                            width={18}
                            height={18}
                            alt=""
                        />
                    </a>
                    <a href="#">
                        <Image
                            src="/dribbble.png"
                            width={18}
                            height={18}
                            alt=""
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
