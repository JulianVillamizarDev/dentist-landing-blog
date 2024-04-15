import { Button, Link, Image } from "@nextui-org/react"
import CarouselSlider from "../Carousel";
import { carouselImages } from "../../utils/data";
export default function Hero() {
    return (
        <div className="relative overflow-hidden w-full h-[480px] m-0 p-0">
                <div className="absolute top-0 bottom-0 right-0 left-0 z-10 place-self-center flex flex-col justify-center items-start py-4 px-4 xl:px-0">
                    <h1 className="max-w-2xl mb-4 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Odontología de Calidad, Sonrisas Brillantes</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Enfocados en la excelencia odontológica, hacemos que cada visita sea cómoda y efectiva. Confía en nosotros para mantener tu sonrisa saludable y hermosa.
                    </p>
                    <Button as={Link} href="#contact" size="lg" className="font-semibold" color="secondary">Contactanos</Button>
                </div>
                <div className="w-full h-full z-0">
                    <img src="/gallery/1.jpg" className="object-cover h-full w-full rounded-none z-0 blur-sm" alt="Hero Image"/>    
                </div>
                
        </div>
    )
}