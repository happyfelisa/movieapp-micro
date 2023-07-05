import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Movie } from './movie.entity';

@Entity()
export class Playlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  userId: number;

  @OneToMany(() => Movie, (movie) => movie.playlists)
  movie: Movie[];
}
