/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
                cardColor: 'rgb(23, 23, 23)',
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
