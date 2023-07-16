import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { ContactDetail } from './contact-detail.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Employee,ContactDetail])],
    controllers: [EmployeeController],
    providers: [EmployeeService],
    exports: [],
})
export class EmployeeModule {
    constructor(){
        console.log('employee module called')
    }
}
