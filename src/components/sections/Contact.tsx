import { Card, CardBody, Image, Snippet, Button, Link } from "@heroui/react";
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
                <iframe className="rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.939729686293!2d-72.4853874!3d7.9013658000000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6645e7dd2ea547%3A0x721c636235529de6!2sOdontolog%C3%ADa%20Angela%20Villamizar%20-%20Odontolog%C3%ADa%20Especializada!5e0!3m2!1ses!2sco!4v1752025022200!5m2!1ses!2sco" width="600" height="450"  loading="lazy"></iframe>
            </div>
        </Section>
    )
}