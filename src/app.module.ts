import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service'; 
import { Employee } from './employee/employee.entity';
import { ContactDetail } from './employee/contact-detail.entity';
import { EmployeeModule } from './employee/employee.module';
import { config } from 'dotenv';
require('dotenv').config();


@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: process.env.PASSWORD,
    database: 'mohitdb2',
    entities: [Employee, ContactDetail],
    synchronize: false,
    autoLoadEntities: true,
  }),
  EmployeeModule
  ],
})
export class AppModule {}
