import {Accordion, AccordionItem} from "@nextui-org/react";
import { FAQ } from "../utils/data";

export default function AccordionFAQ() {
    return (
        <Accordion variant="splitted">
            {
                FAQ.map((item, index) => (
                    <AccordionItem key={`faq-${index}`} title={item.name}>
                        {item.description}
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}