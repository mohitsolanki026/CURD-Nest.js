import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Employee } from './employee.entity';

@Entity()
export class ContactDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phoneNumber: string;

  @Column()
  relationship: string;

  @ManyToOne(() => Employee, (employee) => employee.contactDetails)
  employee: Employee;
}
