function Section({ id, children, ref }) {
    return (
        <section className=" h-screen w-full snap-center" id={id} ref={ref}>
            {children}
        </section>
    )
}

export default Section
