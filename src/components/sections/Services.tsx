import ServiceCard from "../ServiceCard"
import { services } from "../../utils/data"
import Section from "../Section"
import Title from "../Title"

export default function Services() {
    return (
        <div>
            <Section id="services" className="flex flex-col items-center justify-center py-32">
                <Title>Conoce Nuestros Servicios</Title>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
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