import { useState, type FormEventHandler, type MouseEventHandler } from "react"
import Section from "../Section"
import { Input, Button, Select, SelectItem, Textarea, DatePicker, TimeInput } from "@nextui-org/react"
import { identificationTypes } from "../../utils/data"

export default function RegisterForm(){

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [idType, setIdType] = useState("");
    const [id, setId] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [initialTime, setInitialTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    const handleForm = (e: any): MouseEventHandler<HTMLInputElement> => {
        e.preventDefault();
        console.log("send form...");
        return e;
    }
    

     return (
        <section className="relative flex flex-col max-w-3xl mx-auto my-8 gap-8 justify-center items-start px-4 xl:px-0">
            <img src="logo-2.webp" alt="bg" className="absolute top-0 left-0 w-full h-full object-contain opacity-15"/>
                <div className="space-y-2">
                    <h1 className="font-bold">¡Agenda Tu Cita!</h1>
                    <h3 className="text-gray-400">Nosotros te confirmamos via WhatsApp</h3>    
                    <p className="text-xs text-red-300">TODOS LOS CAMPOS SON REQUERIDOS</p>
                </div>
                <form action="" className="flex flex-col gap-4 w-full max-w-3xl">
                    <div className="flex flex-col md:flex-row gap-4">
                        <Input type="text" label="Nombres" isRequired onChange={(e) => setName(e.target.value)}/>
                        <Input type="text" label="Apellidos" isRequired onChange={(e) => setSurname(e.target.value)}/>   
                    </div>
                    <Input type="email" label="Correo Electronico" isRequired /> 
                    <div className="flex flex-col md:flex-row gap-4">
                        <Select label="Tipo de Documento" isRequired onChange={(e) => setIdType(e.target.value)}>
                            {
                                identificationTypes.map((item) => (
                                    <SelectItem key={item.key} value={item.value}>
                                        {item.text}
                                    </SelectItem>
                                ))
                            }
                        </Select>
                        <Input type="number" min={0} label="Numero de documento"  isRequired onChange={(e) => setId(e.target.value)}/>   
                    </div> 
                    <Input type="number" label="Teléfono Móvil" isRequired onChange={(e) => setPhoneNumber(e.target.value)}/>
                    <div className="flex flex-col md:flex-row gap-4 items-end">
                            <TimeInput label="¿En que rango horario deseas ser atendido?" labelPlacement="outside" isRequired onChange={(e) => setInitialTime(e.toString())}/>
                            <TimeInput isRequired onChange={(e) => setEndTime(e.toString())}/>
                    </div>
                    <DatePicker label="¿Que día deseas ser atendido?" labelPlacement="outside" isRequired onChange={(e) => setEndTime(e.toString())}/>
                    <Textarea labelPlacement="outside" label="¡Cuentanos! ¿Cual es el motivo de tu cita?" placeholder="Consulta, blanqueamiento dental, etc." isRequired onChange={(e) => setDescription(e.target.value)}/>
                    <input type="submit" value={'Enviar'} className="bg-primary-400 text-white rounded-lg py-2 cursor-pointer" onClick={handleForm}/>
                </form>
        </section>
     )
}