import { Card, CardBody, Image, Snippet, Button, Link } from "@nextui-org/react";
import { MAIL, PHONE_NUMBER } from "../../utils/data";
import Section from "../Section";
import Email from "../icons/Email";
import Whatsapp from "../icons/Whatsapp";

export default function Contact() {
    
    return (
        <Section id="contact" className="grid lg:grid-cols-2">
            <div className="flex flex-col items-center justify-center lg:items-start">
                <h3 className="text-gray-400">¿Quieres agendar tu cita?</h3>
                <h1 className="font-bold text-5xl md:text-6xl">Contactanos</h1>
                <div className="my-6 flex flex-col gap-2">
                    <Button as={Link} href={`mailto:${MAIL}`} variant="solid" color="primary" startContent={<Email/>}>{MAIL}</Button>
                    <Button as={Link} href={`https://wa.me/${PHONE_NUMBER.trim()}`} variant="solid" color="success" className="text-white" startContent={<Whatsapp/>}>WhatsApp</Button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Image 
                    className="object-fit max-h-[512px]" 
                    removeWrapper
                    src="/consultorio-maps.png" 
                />
            </div>
        </Section>
    )
}