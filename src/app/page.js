import Navbar from '@/components/Navbar'
import Section from '@/components/Section'
import Test from '@/components/Test'
import Hero from '@/components/Hero'

export default function Home() {
    return (
        <div>
            <Section>
                <Navbar />
                <Hero />
            </Section>
            <Section id="About">About</Section>
            <Section id="Services">Services</Section>
            <Section id="Technologies">Technologies</Section>
            <Section id="Portfolio">Portfolio</Section>
            <Section>Portfolio1</Section>
            <Section>Portfolio2</Section>
            <Section>Portfolio3</Section>
            <Section id="Contact">Contact</Section>

            {/* <Test /> */}
        </div>
    )
}
