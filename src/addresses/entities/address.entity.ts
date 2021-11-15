import { Company } from "src/company/entities/company.entity"
import { Column, Entity, JoinColumn, BaseEntity, ManyToOne, PrimaryGeneratedColumn, JoinTable } from "typeorm"

@Entity('addresses')
export class Address extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    cep: string

    @Column()
    street: string

    @Column({nullable: true})
    complement: string

    @Column()
    state: string

    @Column()
    number: number

    @Column()
    city: string

    @Column()
    country: string

    @ManyToOne(() => Company, company => company.addresses, {primary:
        true})
    company: Company
}
