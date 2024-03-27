import Navbar from '@/components/Navbar'
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

export default function Home() {
    return (
        <div>
            <Section>
                <Navbar />
                <Hero />
            </Section>
            {/* <Section id="Services">
                <Parallax type="services" />
            </Section> */}
            <Section>
                <Services />
            </Section>
            <Section id="Portfolio">
                <Parallax type="portfolio" />
            </Section>

            <Portfolio>
                <Kasa />
                <Booki />
                <Ohmyfood />
            </Portfolio>
            <Section id="About">About</Section>
            <Section id="Technologies">Technologies</Section>
            <Section id="Contact">
                <Contact />
                <Test />
            </Section>
        </div>
    )
}
