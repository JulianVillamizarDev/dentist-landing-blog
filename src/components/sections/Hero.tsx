import { Button, Link, Card, CardHeader, CardBody } from "@nextui-org/react"
import ToothIcon from "../icons/Tooth"
import Section from "../Section"
export default function Hero() {
    return (
        <Section className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:h-screen ">
                <div className="flex flex-col justify-center xl:items-start items-center py-4 px-4">
                    <h1 className="max-w-2xl mb-4 text-center xl:text-left text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Odontología de Calidad, Sonrisas Brillantes</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Enfocados en la excelencia odontológica, hacemos que cada visita sea cómoda y efectiva. Confía en nosotros para mantener tu sonrisa saludable y hermosa.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button as={Link} href="#contact" size="lg" className="font-semibold" color="secondary">Contactanos</Button>
                        <Button as={Link} href="#" size="lg" className="font-semibold" color="secondary" variant="bordered">Agenda Tu Cita</Button>   
                    </div>
                    
                </div>
                <div className="hidden xl:grid grid-cols-2 grid-rows-4 gap-2 w-full h-full z-0 overflow-hidden">
                    <img src="/gallery/img-4.jpg" className="object-cover w-full h-full z-0 rounded-md row-span-2 row-start-1" alt="Hero Image"/> 
                    <img src="/gallery/img-2.jpg" className="object-cover w-full h-full z-0 rounded-md " alt="Hero Image"/>    
                    <img src="/gallery/img-3.jpg" className="object-cover w-full h-full z-0 rounded-md row-span-2" alt="Hero Image"/>    
                    <img src="/gallery/img-1.jpg" className="object-cover w-full h-full z-0 rounded-md " alt="Hero Image"/>    
                    <img src="/gallery/5.jpg" className="object-cover w-full h-full z-0 rounded-md col-span-2" alt="Hero Image"/>       
                </div>
                <div className="col-span-2 flex flex-wrap justify-center xl:justify-between gap-8">
                    <Card className="p-4 max-w-96">
                        <CardHeader className="flex items-center gap-4 p-2">
                            <div className="bg-primary-100 text-primary-300 p-2 rounded-full">
                                <ToothIcon></ToothIcon>    
                            </div>
                            <h1 className="text-2xl font-semibold">Test</h1>
                        </CardHeader>
                        <CardBody className="p-2">
                            <p className="text-lg text-gray-500" >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis necessitatibus nulla laboriosam iste! Error itaque sed quasi, nemo rem.
                            </p>
                        </CardBody>
                    </Card>

                    <Card className="p-4 max-w-96">
                        <CardHeader className="flex items-center gap-4 p-2">
                            <div className="bg-primary-100 text-primary-300 p-2 rounded-full">
                                <ToothIcon></ToothIcon>    
                            </div>
                            <h1 className="text-2xl font-semibold">Test</h1>
                        </CardHeader>
                        <CardBody className="p-2">
                            <p className="text-lg text-gray-500" >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis necessitatibus nulla laboriosam iste! Error itaque sed quasi, nemo rem.
                            </p>
                        </CardBody>
                    </Card>

                    <Card className="p-4 max-w-96">
                        <CardHeader className="flex items-center gap-4 p-2">
                            <div className="bg-primary-100 text-primary-300 p-2 rounded-full">
                                <ToothIcon></ToothIcon>    
                            </div>
                            <h1 className="text-2xl font-semibold">Test</h1>
                        </CardHeader>
                        <CardBody className="p-2">
                            <p className="text-lg text-gray-500" >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis necessitatibus nulla laboriosam iste! Error itaque sed quasi, nemo rem.
                            </p>
                        </CardBody>
                    </Card>

                </div>
        </Section>
    )
}