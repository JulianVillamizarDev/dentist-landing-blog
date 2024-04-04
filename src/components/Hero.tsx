import { Button, Link, Image } from "@nextui-org/react"
export default function Hero() {
    return (
        <section id="about" className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="place-self-center flex flex-col justify-center items-center text-center py-4">
                    <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Odontología de Calidad, Sonrisas Brillantes</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Enfocados en la excelencia odontológica, hacemos que cada visita sea cómoda y efectiva. Confía en nosotros para mantener tu sonrisa saludable y hermosa.
                    </p>
                    <Button as={Link} href="#contact" size="lg" className="font-semibold" variant="ghost" color="secondary">Contactanos</Button>
                </div>
                <div className="flex justify-center">
                    <Image src="/gallery/bg.jpg"></Image>
                </div>
        </section>
    )
}