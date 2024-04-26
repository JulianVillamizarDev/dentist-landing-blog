import Section from "../Section"
import { Input, Image, Select, SelectItem } from "@nextui-org/react"
import { identificationTypes } from "../../utils/data"

export default function RegisterForm(){
     return (
        <Section className="grid xl:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div className="space-y-2">
                    <h1 className="font-bold">¡Agenda Tu Cita!</h1>
                    <h3 className="text-gray-400">Nosotros te confirmamos via WhatsApp</h3>    
                </div>
                <form action="" className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <Input type="text" label="Nombres"  />
                        <Input type="text" label="Apellidos"  />   
                    </div>
                    <Input type="email" label="Correo Electronico"  /> 
                    <div className="flex gap-4">
                        <Select label="Tipo de Documento">
                            {
                                identificationTypes.map((item) => (
                                    <SelectItem key={item.key} value={item.value}>
                                        {item.text}
                                    </SelectItem>
                                ))
                            }
                        </Select>
                        <Input type="number" min={0} label="Numero de documento"  />   
                    </div> 
                    <Input type="number" label="Teléfono Móvil"  /> 
                </form>  
            </div>
            <div className="p-8">
            </div>
        </Section>
     )
}