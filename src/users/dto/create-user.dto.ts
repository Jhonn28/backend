import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateUserDto {
    
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    apellido: string;

    @IsNumber()
    @IsNotEmpty()
    cedula: number;

    @IsString()
    @IsNotEmpty()
    tipo_sangre: string;

    @IsNumber()
    @IsNotEmpty()
    colesterol: number;
    
    @IsNumber()
    @IsNotEmpty()
    glucosa: number;

    @IsNumber()
    @IsNotEmpty()
    precion_arterial: number;
}
