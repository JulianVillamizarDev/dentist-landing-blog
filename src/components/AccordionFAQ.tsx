import {Accordion, AccordionItem} from "@heroui/react";
import { FAQ } from "../utils/data";

export default function AccordionFAQ() {
    return (
        <Accordion variant="splitted">
            {
                FAQ.map((item, index) => (
                    <AccordionItem key={`faq-${index}`} className="font-semibold my-0" title={item.name}>
                        <span className="font-light m-0 p-0">
                            {item.description}
                        </span>
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}