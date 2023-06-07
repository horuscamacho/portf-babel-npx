
export function MobileNav({children}) {
    return (
        <section className="lg:hidden h-16 bg-yellow w-screen flex justify-between items-center px-4">
            {children}
        </section>
    )
}