import {Card, CardHeader, CardBody, CardFooter, Image, Button, Link} from "@heroui/react";

interface ServiceCardProps {
    name: string;
    description: string;
    imgUrl: string;
}

export default function ServiceCard({ name, description, imgUrl}: ServiceCardProps) {
    return (
        <Card className="h-[420px] w-[296px] p-2">
            <CardHeader className="flex flex-col items-start">
                <h2 className="font-bold text-xl">{name}</h2>
                <p className="text-gray-400">{description}</p>
            </CardHeader>
            <CardBody className="overflow-hidden">
                <Image 
                    loading="lazy"
                    src={imgUrl} 
                    alt="Card Background"
                    removeWrapper
                    className="w-full h-full object-cover"
                /> 
            </CardBody>
            <CardFooter>
                <Button as={Link} href="#" showAnchorIcon size="sm" color="primary" className="w-full text-base">Conoce más</Button>
            </CardFooter>
        </Card>
    )
}