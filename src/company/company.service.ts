import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressRepository } from 'src/addresses/addresses.repository';
import { Address } from 'src/addresses/entities/address.entity';

import * as CompanyRepository from './company.repository'
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';
import { Connection } from 'typeorm';

@Injectable()
export class CompanyService {
  constructor(
    private connection: Connection,
    @InjectRepository(Company)
    private readonly companiesRepository: CompanyRepository.CompanyRepositories, 

    @InjectRepository(Address)
    private readonly addressesRepository: AddressRepository, 
    
    ){}
  
    async create(
      createCompanyDto: CreateCompanyDto,
      cep: string,
    ): Promise<Company> {
      return await CompanyRepository.createCompanyRepository(
        createCompanyDto,
        cep,
        this.connection
      )

     
  }

  findAll() {
    return this.companiesRepository.find();
  }

  async findOne(id: number) {
    
    const course = this.companiesRepository.findOne(id, {
      relations: ['address'],
    });

    const companiesById = await this.companiesRepository.findOne(id);
    const address = await this.addressesRepository.findOne({
      where: {
        id: id,
      }
    })
    if(!address) {
      throw new NotFoundException('Curse not found')
    }
    return {
      ...companiesById,
      ...address
    }
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return ""
  }

  async remove(id: number) {
    const companiesDestroy = await this.companiesRepository.findOne(id)
    if(!companiesDestroy) {
      throw new NotFoundException('Curse not found')
    }
    return this.companiesRepository.remove(companiesDestroy)
  }

  private async preloadAddressInCompany(cep: string): Promise<Address> {
    const cepAlreadyExists = await this.addressesRepository.findOne(cep)

    if (cepAlreadyExists) {
      return cepAlreadyExists;
    }

    return this.addressesRepository.create({ cep });
  }

}
