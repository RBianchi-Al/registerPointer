import { InternalServerErrorException } from "@nestjs/common";
import { Company } from "src/company/entities/company.entity";
import { EntityRepository, Repository, Connection} from "typeorm"
import { CreateAddressDto } from "./dto/create-address.dto";
import { Address } from "./entities/address.entity"


@EntityRepository(Address)
class AddressRepository extends Repository<Address>{}
export {AddressRepository}



export async function createAddressRepository(
    createAddressDto: CreateAddressDto,
    cnpj: string,
    connection: Connection

): Promise<Address> {
    const {cep, city, complement,number, country, state, street} = createAddressDto;

    const address = connection.getRepository(Address).create();
    address.city = city;
    address.complement = complement;
    address.country = country;
    address.number = number;
    address.state = state;
    address.street = street
    address.cep = cep
    address.company = await connection
    .getRepository(Company)
    .findOne({cnpj: cnpj})
        
    try {
        address.save();
        return address;
    }catch (err) {
        throw new InternalServerErrorException(
            "Erro ao salvar dados"
        )
    }
    
}