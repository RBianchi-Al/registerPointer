import { Address } from "src/addresses/entities/address.entity";

import {Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, JoinTable } from "typeorm";

@Entity('company')
export class Company extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    razao: string

    @Column()
    cnpj: string

    @Column()
    fantasy_name: string

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
    
    @JoinTable({ name: 'company_id' })
    @OneToMany(() => Address, addresses => addresses.company) 
    addresses: Address[]
   


   
    //@OneToMany(() => Address, company => company)
    //companyConnection:  Address
}
