import { IsString, IsNumber} from "class-validator"


export class CreateCompanyDto {
  @IsString()
  cnpj: string;

  @IsString()
  razao: string

  @IsString()
  fantasy_name: string

}
