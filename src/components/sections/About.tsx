import { Image } from "@heroui/react"
import Section from "../Section"
import Title from "../Title"

export default function About() {
    return (
        <Section id="about" className="py-32">
            <div className="mx-auto flex flex-col xl:grid xl:grid-cols-2 gap-24">
                <div className="flex flex-col items-start">
                    <Title className="w-full">
                        Nosotros
                    </Title>
                    <p className="text-lg">
                        Somos un equipo de profesionales apasionados por la odontología, comprometidos con tu salud bucal y bienestar. Con años de experiencia, ofrecemos servicios de alta calidad en un ambiente acogedor y moderno. Nuestro objetivo es brindarte una atención personalizada y soluciones efectivas para que sonrías con confianza.
                    </p>   
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="relative after:absolute after:bg-primary-400 after:h-72 after:w-64 after:rounded-md after:top-0 after:translate-x-6 after:-translate-y-4">
                        <Image loading="lazy" src="/gallery/img-3.jpg" className="rounded-md border-2 border-primary-400 object-cover h-72 w-64 -mt-10"/>      
                    </div>
                    <div className="relative after:absolute after:bg-primary-400 after:h-72 after:w-64 after:rounded-md after:top-0 after:translate-x-6 after:translate-y-6">
                        <Image loading="lazy" src="/gallery/img-4.jpg" className="rounded-md border-2 border-primary-400 object-cover h-72 w-64 -mb-10"/>    
                    </div>
                      
                </div>
            </div>
        </Section>
    )
}