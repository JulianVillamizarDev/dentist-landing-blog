import { Image } from "@nextui-org/react"
import Section from "../Section"

export default function About() {
    return (
        <Section>
            <div id="about" className="mx-auto grid grid-cols-2 items-center gap-8">
                <div>
                    <h1 className="font-semibold mb-8">Acerca de</h1>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac pellentesque ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam volutpat quam nec libero congue vestibulum. Maecenas id nulla neque. Fusce convallis semper enim eget imperdiet. Proin non posuere tellus. In sed nisl dui. Pellentesque eget posuere erat, id lacinia magna. Praesent a quam non magna posuere commodo. Ut nec nibh eget urna facilisis efficitur eget eu risus. In urna nulla, vulputate eget consectetur vitae, commodo hendrerit tellus. Pellentesque ornare varius sollicitudin.
                    </p>   
                </div>
                <div className="flex items-center justify-center gap-8">
                    <div className="relative after:absolute after:bg-primary-400 after:h-72 after:w-64 after:rounded-md after:top-0 after:translate-x-6 after:-translate-y-4">
                        <Image loading="lazy" src="/gallery/img-3.jpg" className="rounded-md object-cover h-72 w-64 -mt-10"/>      
                    </div>
                    <div className="relative after:absolute after:bg-primary-400 after:h-72 after:w-64 after:rounded-md after:top-0 after:translate-x-6 after:translate-y-6">
                        <Image loading="lazy" src="/gallery/img-4.jpg" className="rounded-md object-cover h-72 w-64 -mb-10"/>    
                    </div>
                    
                      
                </div>
            </div>
        </Section>
    )
}