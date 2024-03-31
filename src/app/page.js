import Hero from '@/components/Hero'
import Portfolio from '@/components/Porfolio'
import Contact from '@/components/Contact'
import Sidebar from '@/components/Sidebar'
import About from '@/components/About'

export default function Page() {
    return (
        <main>
            <Sidebar />
            <Hero />
            <About />
            <Portfolio />
            <Contact />
        </main>
    )
}
