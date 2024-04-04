import {Accordion, AccordionItem} from "@nextui-org/react";
import { FAQ } from "../utils/data";

export default function AccordionFAQ() {
    return (
        <Accordion variant="splitted">
            {
                FAQ.map((item, index) => (
                    <AccordionItem key={`faq-${index}`} className="font-semibold" title={item.name}>
                        <span className="font-light">
                            {item.description}
                        </span>
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}