import Hero from '@/components/Hero'
import Contact from '@/components/Contact'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Sidebar from '@/components/utils/Sidebar'

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
