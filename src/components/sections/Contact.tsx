import { Card, CardBody, Image, Snippet, Button, Link } from "@nextui-org/react";
import Email from "../icons/Email";
import Whatsapp from "../icons/Whatsapp";

export default function Contact() {

    const MAIL = 'od.angelavillamizar@hotmail.com';
    const PHONE_NUMBER = '573142384249';
    
    return (
        <section id="contact" className="grid lg:grid-cols-2">
            <div className="flex flex-col items-center justify-center lg:items-start">
                <h3 className="text-gray-400">Quieres agendar tu cita?</h3>
                <h1 className="font-bold text-5xl lg:text-6xl">Contactanos</h1>
                <div className="my-6 flex flex-col gap-2">
                    <Button as={Link} href={`mailto:${MAIL}`} variant="solid" color="primary" startContent={<Email/>}>{MAIL}</Button>
                    <Button as={Link} href={`https://wa.me/${PHONE_NUMBER.trim()}`} variant="solid" color="success" className="text-white" startContent={<Whatsapp/>}>WhatsApp</Button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Card>
                    <CardBody>
                        <Image 
                            className="object-cover w-full h-full" 
                            removeWrapper
                            src="/consultorio-maps.png" 
                        />
                    </CardBody>
                </Card>
            </div>
        </section>
    )
}