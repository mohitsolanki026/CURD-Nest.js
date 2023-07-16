import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async createEmployee(employee: Employee): Promise<Employee> {
    return this.employeeRepository.save(employee);
  }

  async getEmployeeById(id: number): Promise<Employee> {
    return this.employeeRepository.findOneById(id);
  }

  
  async updateEmployee(employee: Employee): Promise<Employee> {
    var existingEmployee = await this.employeeRepository.findOneById(employee.id);
    existingEmployee.fullName = employee.fullName;
    existingEmployee.jobTitle = employee.jobTitle;
    existingEmployee.phoneNumber = employee.phoneNumber;
    existingEmployee.email = employee.email;
    existingEmployee.address = employee.address;
    existingEmployee.city = employee.city;
    existingEmployee.state = employee.state;
    return this.employeeRepository.save(existingEmployee);
  }

  async deleteEmployee(id: number): Promise<void> {
    await this.employeeRepository.delete(id);
  }

  async getEmployees(page: number, limit: number): Promise<Employee[]> {
    return this.employeeRepository.find({
      skip: (page - 1) * limit,
      take: limit,
      // relations: ['contactDetails'],
    });
  }
}
