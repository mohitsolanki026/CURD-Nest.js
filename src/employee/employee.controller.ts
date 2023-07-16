// employee.controller.ts
import { Controller, Get, Post, Patch, Delete, Param, Body, Query } from '@nestjs/common';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async createEmployee(@Body() employee: Employee): Promise<Employee> {
    return this.employeeService.createEmployee(employee);
  }

  @Get(':id')
  async getEmployee(@Param('id') id: number): Promise<Employee> {
    return await this.employeeService.getEmployeeById(id);
  }

  @Patch(':id')
  async updateEmployee(@Param('id') id: number, @Body() employee: Employee): Promise<Employee> {
    employee.id = id;
    return this.employeeService.updateEmployee(employee);
  }

  @Delete(':id')
  async deleteEmployee(@Param('id') id: number): Promise<void> {
    return this.employeeService.deleteEmployee(id);
  }

  @Get()
  async getEmployees(@Query('page') page = 1, @Query('limit') limit = 10): Promise<Employee[]> {
    return this.employeeService.getEmployees(page, limit);
  }
}
