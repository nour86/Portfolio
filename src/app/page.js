import Hero from '@/components/Hero'
import Contact from '@/components/Contact'
import About from '@/components/About'
import PortfolioB from '@/components/PortfolioB'
import TypeWriter from '@/components/utils/Typewriter'
import Sidebar from '@/components/utils/Sidebar'

export default function Page() {
    return (
        <main>
            <Sidebar />
            <Hero />
            <About />
            <PortfolioB />
            <Contact />
        </main>
    )
}
