import {Card, CardHeader, CardBody, CardFooter, Image, Button, Link} from "@heroui/react";
import ToothIcon from "./icons/Tooth";

interface ServiceCardProps {
    name: string;
    description: string;
    imgUrl: string;
}

export default function ServiceCard({ name, description, imgUrl}: ServiceCardProps) {
    return (
        <Card className="p-4 max-w-96 bg-white/60 hover:scale-105">
            <CardHeader className="flex items-center gap-4 p-2">
                <div className="bg-gray-300 text-primary-400 p-2 rounded-full">
                    <ToothIcon/>   
                </div>
                <h2 className="font-bold text-xl">{name}</h2>
            </CardHeader>
            <CardBody className="overflow-hidden">
                <p className="text-gray-400">{description}</p>
            </CardBody>
            <CardFooter>
                <Button as={Link} href="#" showAnchorIcon size="sm" color="primary" className="w-full text-base">Conoce más</Button>
            </CardFooter>
        </Card>
    )
}