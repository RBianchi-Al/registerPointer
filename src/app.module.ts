import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressesModule } from './addresses/addresses.module';
import { CompanyModule } from './company/company.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "daimoku.",
    database: "tcc",
    autoLoadEntities: true,
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migration/**/*.js'],
    subscribers: ['dist/subscriber/**/*.js'],
    cli: {
        entitiesDir: './src/entity',
        migrationsDir: './src/migrations',
        subscribersDir: './src/subscriber'
    },
  }), AddressesModule, CompanyModule],
})
export class AppModule {}
