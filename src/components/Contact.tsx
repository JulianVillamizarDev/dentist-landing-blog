import { Card, CardBody, Image, Snippet, Button, Link } from "@nextui-org/react";
import Email from "./icons/Email";
import Whatsapp from "./icons/Whatsapp";

export default function Contact() {

    const MAIL = 'od.angelavillamizar@hotmail.com';
    const PHONE_NUMBER = '573142384249';
    
    return (
        <section className="my-16 grid lg:grid-cols-2">
            <div className="flex flex-col items-start justify-center">
                <h3 className="text-gray-400">Quieres agendar tu cita?</h3>
                <h1 className="font-bold text-6xl">Contactanos</h1>
                <div className="my-6 flex flex-col gap-2">
                    <Button as={Link} href={`mailto:${MAIL}`} variant="solid" color="primary" startContent={<Email/>}>{MAIL}</Button>
                    <Button as={Link} href={`https://wa.me/${PHONE_NUMBER.trim()}`} variant="solid" color="success" className="text-white" startContent={<Whatsapp/>}>WhatsApp</Button>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <Card>
                    <CardBody>
                        <Image src="/consultorio-maps.png" />
                    </CardBody>
                </Card>
                <Snippet className="my-6">Av Libertadores, bahía Torres del Parque, Local C1</Snippet>
            </div>
        </section>
    )
}