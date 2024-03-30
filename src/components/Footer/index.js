import React from 'react'

const Footer = () => {
    return (
        <div className="w-full h-[30vh] bg-black px-12 flex flex-col justify-evenly items-center snap-start">
            <p>
                Ce site ne collecte aucune donnée. Vous pouvez trouver le code
                source sur Github.
            </p>

            <span>
                Développé avec
                <a
                    href="https://nextjs.org/"
                    rel="nofollow noopener noreferrer"
                >
                    <img
                        className=" inline-block px-2"
                        src="/logos/nextjsdark.svg"
                        alt="Next.js"
                        style={{ height: '32px' }}
                    />
                </a>{' '}
                et{' '}
                <a
                    href="https://tailwindui.com/"
                    rel="nofollow noopener noreferrer"
                >
                    <img
                        className=" inline-block px-2"
                        src="/logos/tailwind.svg"
                        alt="tailwind"
                        style={{ height: '32px' }}
                    />
                </a>{' '}
            </span>
            <span>
                et hébergé sur
                <a
                    href="https://netlify.com/"
                    rel="nofollow noopener noreferrer"
                >
                    <img
                        className=" inline-block px-2"
                        src="/logos/netlify-wordmark.svg"
                        alt="Netlify"
                        style={{ height: '26px' }}
                    />
                </a>
            </span>
        </div>
    )
}

export default Footer
