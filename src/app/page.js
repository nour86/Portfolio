import Hero from '@/components/Hero'
import Parallax from '@/components/Parallax'
import Portfolio from '@/components/Porfolio'
import Contact from '@/components/Contact'
import Sidebar from '@/components/Sidebar'
import About from '@/components/About'

export default function Page() {
    return (
        <main>
            <Sidebar />
            <Hero />
            {/* <Section id="Services">
                <Parallax type="services" />
            </Section> */}
            <About />
            {/* <Parallax type="portfolio" /> */}
            <Portfolio />

            <Contact />
            {/* <Test /> */}
        </main>
    )
}
