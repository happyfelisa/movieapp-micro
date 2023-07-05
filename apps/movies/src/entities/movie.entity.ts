import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Playlist } from './playlist.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tmdbId: number;

  @Column()
  title: string;

  @Column()
  overview: string;

  @Column()
  posterPath: string;

  @ManyToMany(() => Playlist)
  @JoinTable()
  playlists: Playlist[];
}
