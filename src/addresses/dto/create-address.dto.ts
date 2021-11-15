import { IsString } from 'class-validator';

export class CreateAddressDto {
    @IsString()
    cep: string;
    
    @IsString()
    street: string;  

    @IsString()
    complement: string;

    @IsString()
    state: string;

    @IsString()
    number: number;

    @IsString()
    city: string;

    @IsString()
    country: string;  
}
