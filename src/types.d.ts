import { isEmail, IsEmail, Min, IsEmpty, IsDate } from "class-validator";

export class MailData {
    @Min(2)
    name: string;

    @IsEmpty()
    @Min(3)
    surname: string;

    @IsEmail()
    email: string;

    idType: string;

    id: string;

    phonePrefix: string | undefined;

    phoneNumber: string;

    initialTime: string;

    endTime: string;

    @IsDate()
    date: string;

    @Min(5)
    @IsEmpty()
    description: string;

}