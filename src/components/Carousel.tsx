import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import ArrowIcon from "./icons/Arrow";

interface CarouselProps {
    images: Array<string>;
    autoPlay?: boolean;
    showButtons?: boolean;
}

export default function CarouselSlider( props: CarouselProps) {

    const { images, autoPlay = false, showButtons = false} = props;

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        if (currentSlide === images.length - 1) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    }

    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(images.length - 1);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    }

    return (
        <div className="overflow-hidden relative">
            <div 
                className="flex transition ease-out duration-40 w-full h-full"
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                }}
            >
                {images.map((image, index) => (
                    <img
                        key={`carousel-img-${index}`}
                        src={image}
                        className="w-full h-full object-cover rounded-md"
                        alt={`Slide ${index + 1}`}
                    />
                ))}
            </div>
            {
                showButtons && 
                <>
                    <div className="absolute h-full top-1/2 left-0 ml-2">
                        <Button onClick={prevSlide} color="primary">
                            <ArrowIcon direction="left"/>
                        </Button>
                    </div>
                    <div className="absolute h-full top-1/2 right-0 mr-2">
                        <Button onClick={nextSlide} color="primary">
                            <ArrowIcon />
                        </Button>
                    </div>
                </>
            }
            
        </div>
    )
}