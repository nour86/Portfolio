/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            background: {
                test: 'bg-black',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                screen: 'linear-gradient(76deg,rgba(11,10,10,0.95) 60%, rgba(132,141,132,0.08) 50%)',
                imac: "url('/diapo/imac.svg')",
                macbook: "url('/diapo/macbook.svg')",
            },
            inset: {
                xs: '1px',
            },
            margin: {
                xs: '1px',
            },
            padding: {
                xs: '1px',
            },

            backgroundColor: {
                cardColor: 'rgb(2, 6, 23)',
                screen: 'linear-gradient(76deg,rgba(11,10,10,0.95) 60%, rgba(132,141,132,0.08) 50%);',
            },
            fontSize: {
                clamp4xl: 'clamp(2rem, 10vw, 6rem)',
                clamp2xl: 'clamp(1rem, 5vw, 3rem)',
            },
            boxShadow: {
                screen: '0 -7px -7px -15px rgba(0, 0, 0, 0.3)',
            },
        },
    },
    plugins: [],
}
