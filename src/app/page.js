import Hero from '@/components/Hero'
import Portfolio from '@/components/Porfolio'
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
