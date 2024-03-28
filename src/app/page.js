import Navbar from '@/components/Header'
import Section from '@/components/Section'
import Test from '@/components/Test'
import Hero from '@/components/Hero'
import Parallax from '@/components/Parallax'
import Services from '@/components/Services'
import Portfolio from '@/components/Porfolio'
import Kasa from '@/content/Kasa'
import Booki from '@/content/Booki'
import Ohmyfood from '@/content/OhmyFood'
import Contact from '@/components/Contact'
import Sidebar from '@/components/Sidebar'

export default function Page() {
    return (
        <main>
            <Sidebar />
            <Hero />
            {/* <Section id="Services">
                <Parallax type="services" />
            </Section> */}
            <Services />
            <Parallax type="portfolio" />
            <Portfolio>
                <Kasa />
                <Booki />
                <Ohmyfood />
            </Portfolio>
            <Contact />
            <Test />
        </main>
    )
}
