import { Button, Link, Card, CardHeader, CardBody, Chip } from "@nextui-org/react"
import ToothIcon from "../icons/Tooth"
import Section from "../Section"
export default function Hero() {
    return (
        <Section className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-0 mb-8 lg:my-16">
                <div className="flex flex-col justify-center xl:items-start items-center px-4 h-screen lg:h-auto lg:py-16 2xl:py-0">
                    <h1 className="max-w-2xl mb-4 text-center xl:text-left text-5xl font-semibold tracking-tight leading-none xl:text-6xl dark:text-white">Odontología de Calidad, Sonrisas Brillantes</h1>
                    <p className="max-w-2xl font-light text-center lg:text-left text-gray-900 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Enfocados en la excelencia odontológica, hacemos que cada visita sea cómoda y efectiva. Confía en nosotros para mantener tu sonrisa saludable y hermosa.
                    </p>
                    <div className="w-full flex flex-col items-center justify-center gap-2 xl:hidden my-8 xl:my-0">
                        <span>Pregunta por nuestro plan:</span>
                        <Chip variant="bordered" color="primary" className="">Sonrisa x Sonrisa</Chip>  
                    </div>
                    <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-4">
                        <Button as={Link} href="#contact" size="lg" fullWidth className="font-semibold text-xl" color="secondary">Contactanos</Button>
                        <Button as={Link} href="/register" size="lg" fullWidth className="font-semibold text-xl" color="secondary" variant="bordered">Agenda Tu Cita</Button>   
                    </div>
                    
                </div>
                <div className="hidden xl:flex items-center justify-center w-full">
                    <div className="hidden xl:grid grid-cols-3 grid-rows-3 gap-2 w-full max-h-[512px] z-0 overflow-hidden place-content-center">
                        <img src="/gallery/img-4.jpg" className="object-cover w-full h-full z-0 rounded-md row-span-3 row-start-1" alt="Hero Image"/> 
                        <img src="/gallery/img-2.jpg" className="object-cover w-full h-full z-0 rounded-md " alt="Hero Image"/>    
                        <img src="/gallery/img-3.jpg" className="object-cover w-full h-full z-0 rounded-md row-span-2" alt="Hero Image"/>    
                        <img src="/gallery/img-1.jpg" className="object-cover w-full h-full z-0 rounded-md " alt="Hero Image"/>    
                        <img src="/gallery/5.jpg" className="object-cover w-full h-full z-0 rounded-md col-span-2" alt="Hero Image"/>       
                    </div>   
                </div>
                
                <div className="col-span-2 flex flex-wrap justify-center xl:justify-between gap-4">
                    <Card className="p-4 max-w-96 bg-white/60">
                        <CardHeader className="flex items-center gap-4 p-2">
                            <div className="bg-gray-300 text-primary-400 p-2 rounded-full">
                                <ToothIcon></ToothIcon>    
                            </div>
                            <h1 className="text-2xl font-semibold">Experiencia Profesional Excepcional</h1>
                        </CardHeader>
                        <CardBody className="p-2">
                            <p className="text-lg text-gray-500" >
                            Desde odontología general hasta procedimientos especializados, estamos comprometidos a brindar la mejor atención profesional para garantizar la salud bucal de nuestros pacientes.
                            </p>
                        </CardBody>
                    </Card>

                    <Card className="p-4 max-w-96 bg-white/60">
                        <CardHeader className="flex items-center gap-4 p-2">
                            <div className="bg-gray-300 text-primary-400 p-2 rounded-full">
                                <ToothIcon></ToothIcon>    
                            </div>
                            <h1 className="text-2xl font-semibold">Tecnología Avanzada y Tratamientos Innovadores</h1>
                        </CardHeader>
                        <CardBody className="p-2">
                            <p className="text-lg text-gray-500" >
                                En nuestra clínica, nos comprometemos a mantenernos a la vanguardia de la tecnología odontológica.
                            </p>
                        </CardBody>
                    </Card>

                    <Card className="p-4 max-w-96 bg-white/60">
                        <CardHeader className="flex items-center gap-4 p-2">
                            <div className="bg-gray-300 text-primary-400 p-2 rounded-full">
                                <ToothIcon></ToothIcon>    
                            </div>
                            <h1 className="text-2xl font-semibold">Enfoque Personalizado y Cálido</h1>
                        </CardHeader>
                        <CardBody className="p-2">
                            <p className="text-lg text-gray-500" >
                            Nuestro equipo se preocupa por tus necesidades individuales y se dedica a proporcionar un cuidado personalizado que se adapte a ti.
                            </p>
                        </CardBody>
                    </Card>

                </div>
        </Section>
    )
}