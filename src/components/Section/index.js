function Section({ id, children }) {
    return (
        <section className=" h-screen snap-center" id={id}>
            {children}
        </section>
    )
}

export default Section
