import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ContactDetail } from './contact-detail.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  jobTitle: string;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @OneToMany(() => ContactDetail, (contactDetail) => contactDetail.employee, { cascade: true,eager: true })
  contactDetails: ContactDetail[];
}
