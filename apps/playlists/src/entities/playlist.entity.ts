import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './userm.entity';
import { Movie } from './movie,.entity';

@Entity()
export class Playlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.playlist)
  user = User;

  @ManyToMany(() => Movie)
  @JoinTable()
  movies: Movie[];
}
