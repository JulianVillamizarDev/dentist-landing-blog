import { useEffect, useState } from "react";
import { carouselImages } from "../utils/data";
import { Button, Image } from "@nextui-org/react";

interface CarouselProps {
    images: Array<string>;
    autoPlay?: boolean;
    showButtons?: boolean;
}

export default function Carousel( props: CarouselProps) {

    const { images, autoPlay = false, showButtons = false} = props;

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [ loaded, setLoaded ] = useState(false);

    useEffect( () => {
        if( autoPlay || !showButtons){
            const interval = setInterval(() => {
                nextImage();
            }, 5000);
            return () => clearInterval(interval);
        }
    });

    const selectNewImage = (index: number, next = true) => {
        setLoaded(false);
            const condition = next ? index < images.length - 1 : index > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
            setSelectedIndex(nextIndex);
            setSelectedImage(images[nextIndex]);
    }
    const previousImage = () => {
        selectNewImage(selectedIndex, false);
    };
        
    const nextImage = () => {
        selectNewImage(selectedIndex);
    };

    return (
        <div className="relative flex justify-center items-center">
            <Image 
                src={selectedImage} 
                alt="carousel" 
                loading="lazy" 
                className={`w-[480px] h-[384px] object-cover z-0 ${ loaded ? "animate-fade" : ""}`}
                onLoad={() => setLoaded(true)}
            />
            {
                showButtons &&
                <>
                    <Button className="absolute left-0 z-10" onClick={previousImage}>Prev</Button>
                    <Button className="absolute right-0 z-10" onClick={nextImage}>Next</Button>
                </>
            }
            
        </div>
    )
}