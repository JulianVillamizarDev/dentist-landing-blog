import ServiceCard from "../ServiceCard"
import { services } from "../../utils/data"

export default function Services() {
    return (
        <section id="services" className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-4xl text-center">Conoce Nuestros Servicios</h1>
            <div className="mt-8 flex flex-wrap gap-8 justify-center lg:justify-start">
                {
                    services.map(service => (
                    <ServiceCard
                        name={service.name}
                        description={service.description}
                        imgUrl={service.imgUrl}
                    />
                    ))
                }   
            </div>
        </section>
    )
}