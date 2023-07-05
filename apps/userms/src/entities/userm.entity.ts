import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

//@Directive('@key(fields: "id")')
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
}
