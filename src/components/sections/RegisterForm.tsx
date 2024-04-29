import React, { useState} from "react"
import Section from "../Section"
import { Input, Button, Select, SelectItem, Textarea, DatePicker, TimeInput, Autocomplete, AutocompleteItem } from "@nextui-org/react"
import { identificationTypes } from "../../utils/data"
import phonePrefixes from "../../utils/phone-prefixes.json"

export default function RegisterForm() {

    const DEFAULT_PHONE_PREFIX = "CO";
    const DESCRIPTION_MIN_LENGTH = 10;
    const TODAY = new Date();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [idType, setIdType] = useState("");
    const [id, setId] = useState("");
    const [phonePrefix, setPhonePrefix] = useState<React.Key>(DEFAULT_PHONE_PREFIX);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [initialTime, setInitialTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    const handleForm = (e: any) => {
        e.preventDefault();
        const mailObj = {
            name, 
            surname, 
            email, 
            idType, 
            id, 
            prefix: phonePrefixes.find( prefix => prefix.code === phonePrefix)?.dial_code, 
            phoneNumber, 
            initialTime, 
            endTime,
            date, 
            description
        }
        console.log("sending");
        
    }


    return (
        <section className="relative flex flex-col max-w-3xl mx-auto my-8 gap-8 justify-center items-start px-4 xl:px-0">
            <img src="logo-2.webp" alt="bg" className="absolute top-0 left-0 w-full h-full object-contain opacity-15" />
            <div className="space-y-2">
                <h1 className="font-bold">¡Agenda Tu Cita!</h1>
                <h3 className="text-gray-400">Nosotros te confirmamos via WhatsApp</h3>
                <p className="text-xs text-red-300">TODOS LOS CAMPOS SON REQUERIDOS</p>
            </div>
            <form action="" className="flex flex-col gap-4 w-full max-w-3xl" onSubmit={handleForm}>
                <div className="flex flex-col md:flex-row gap-4">
                    <Input type="text" label="Nombres" aria-label="Nombres" isRequired value={name} onChange={(e) => setName(e.target.value)} />
                    <Input type="text" label="Apellidos" aria-label="Apellidos" isRequired onChange={(e) => setSurname(e.target.value)} />
                </div>
                <Input type="email" label="Correo Electronico" aria-label="Correo Electronico" isRequired value={email} onChange={(e) => setEmail(e.target.value)} />
                <div className="flex flex-col md:flex-row gap-4">
                    <Select label="Tipo de Documento" aria-label="Tipo de Documento" isRequired value={idType} onChange={(e) => setIdType(e.target.value)}>
                        {
                            identificationTypes.map((item) => (
                                <SelectItem key={item.key} value={item.value}>
                                    {item.text}
                                </SelectItem>
                            ))
                        }
                    </Select>
                    <Input type="tel" min={0} label="Numero de documento" aria-label="Numero de documento" isRequired value={id} onChange={(e) => setId(e.target.value)} />
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                    <Autocomplete defaultSelectedKey={DEFAULT_PHONE_PREFIX} label="Prefijo Telefonico" aria-label="Prefijo Telefonico" onSelectionChange={setPhonePrefix}>
                        {
                            phonePrefixes.map( item => (
                                <AutocompleteItem key={item.code}>
                                    {
                                        `${item.dial_code} ${item.name}`
                                    }
                                </AutocompleteItem>
                            ))
                        }
                    </Autocomplete>
                    <Input className="col-span-3" type="number" label="Teléfono Móvil" aria-label="Teléfono Móvil" value={phoneNumber} isRequired onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-end">
                    <TimeInput label="¿En que rango horario deseas ser atendido?" aria-label="rango" labelPlacement="outside" isRequired onChange={(e) => setInitialTime(e.toString())} />
                    <TimeInput isRequired label="" aria-label="rango-2" onChange={(e) => setEndTime(e.toString())} />
                </div>
                <DatePicker label="¿Que día deseas ser atendido?" aria-label="dia" labelPlacement="outside" isRequired onChange={(e) => setDate(e.toString())} />
                <Textarea labelPlacement="outside" label="¡Cuentanos! ¿Cual es el motivo de tu cita?" aria-label="decription" placeholder="Consulta, blanqueamiento dental, etc." isRequired value={description} onChange={(e) => setDescription(e.target.value)} />
                <Button type="submit" color="primary" variant="solid">Enviar</Button>
            </form>
        </section>
    )
}