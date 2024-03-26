'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Sidebar from '../Sidebar'

function Navbar() {
    return (
        <div className="h-24 flex justify-end lg:justify-center ">
            <Sidebar />
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
