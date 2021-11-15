import { InternalServerErrorException } from "@nestjs/common";
import { Address } from "src/addresses/entities/address.entity";
import { Company } from "src/company/entities/company.entity"
import { Connection, EntityRepository, Repository } from "typeorm"
import { CreateCompanyDto } from "./dto/create-company.dto"


@EntityRepository(Company)
class CompanyRepositories extends Repository<Company>{

}
export {CompanyRepositories}


export async function createCompanyRepository(
    createCompanyDto: CreateCompanyDto,
    cep: string,
    connection: Connection

): Promise<Company> {
    const {razao, fantasy_name, cnpj} = createCompanyDto;

    const companies = connection.getRepository(Company).create()
    companies.cnpj = cnpj;
    companies.fantasy_name = fantasy_name;
    companies.razao = razao;
    
    companies.addresses = companies.addresses
    await connection
    .getRepository(Address)
    .findOne({cep: cep})
    
    
    try {
        companies.save();
        return companies;
    }catch (err) {
        throw new InternalServerErrorException(
            "Erro ao salvar dados"
        )
    }
    
}