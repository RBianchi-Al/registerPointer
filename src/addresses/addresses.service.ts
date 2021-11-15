import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AddressRepository } from './addresses.repository';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';
import * as AddressRepositories from './addresses.repository'
@Injectable()
export class AddressesService {
 
  constructor(
    private connection: Connection,
    @InjectRepository(Address)
    private readonly addressesRepository: AddressRepository, 

  ) {}

 async create(
    createAddressDto: CreateAddressDto,
    cnpj: string): Promise<Address> {
      return await AddressRepositories.createAddressRepository(
        createAddressDto,
        cnpj,
        this.connection
      )
    }

  findAll() {
    return this.addressesRepository.find()
  }

  findOne(id: number) {
    const addresses = this.addressesRepository.findOne(id)
    
    if(!addresses) {
      throw new NotFoundException('Curse not found')
    }
    return addresses
  }

  async update(id: string, updateAddressDto: UpdateAddressDto) {
  return ""       
 }
  


  async remove(id: number) {
    const removeAddresses = await this.addressesRepository.findOne(id)
    if(!removeAddresses) {
      throw new NotFoundException('Curse not found')
    }
    return this.addressesRepository.remove(removeAddresses)
  }
  
}
