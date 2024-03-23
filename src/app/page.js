import Navbar from '@/components/Navbar'
import Section from '@/components/Section'
import Test from '@/components/Test'
import Hero from '@/components/Hero'
import Parallax from '@/components/Parallax'
import Services from '@/components/Services'

export default function Home() {
    return (
        <div>
            <Section>
                <Navbar />
                <Hero />
            </Section>
            <Section id="Services">
                <Parallax type="services" />
            </Section>
            <Section>
                <Services />
            </Section>
            <Section id="About">About</Section>
            <Section id="Technologies">Technologies</Section>
            <Section id="Portfolio">
                <Parallax type="portfolio" />
            </Section>
            <Section>Portfolio1</Section>
            <Section>Portfolio2</Section>
            <Section>Portfolio3</Section>
            <Section id="Contact">Contact</Section>

            {/* <Test /> */}
        </div>
    )
}
