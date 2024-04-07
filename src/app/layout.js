import { Inter, Roboto_Mono } from 'next/font/google'

import Header from '@/components/Header'
import './globals.css'
import { Suspense } from 'react'
import Loading from './loading'
import Page from './page'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const roboto = Roboto_Mono({
    subsets: ['latin'],
})

export const metadata = {
    title: 'Nour Alchami - Portfolio',
    description: 'Portfolio développeur Junior',
    keywords:
        'développeur,intégrateur, front-end, javascript, nextjs, react, tailwind',
}

export default function RootLayout() {
    return (
        <html lang="fr">
            <body className={inter.className}>
                {/* <Header /> */}
                <Suspense fallback={<Loading />}>
                    <Page />
                </Suspense>
                <Footer />
            </body>
        </html>
    )
}
