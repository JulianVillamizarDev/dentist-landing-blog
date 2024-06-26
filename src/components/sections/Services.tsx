import ServiceCard from "../ServiceCard"
import { services } from "../../utils/data"
import Section from "../Section"
import Title from "../Title"

export default function Services() {
    return (
        <div className="bg-primary-400 text-white">
            <Section id="services" className="flex flex-col items-center justify-center py-32">
                <Title color="white">Conoce Nuestros Servicios</Title>
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
            </Section>    
        </div>
        
    )
}