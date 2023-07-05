import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { Playlist } from './entities/playlist.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movies: Repository<Movie>,
    @InjectRepository(Playlist)
    private readonly playlistsRepo: Repository<Playlist>,
  ) {}

  async findAll() {
    return await this.movies.find();
  }

  async findOne(id: number) {
    console.log('MOVIES SERVICE FIND ONE');
    const movie = await this.movies.findOne({
      where: { id },
    });
    if (!movie) throw new NotFoundException();
    return movie;
  }

  async forPlaylist(playlistId: number) {
    console.log('wilberson', playlistId);
    const mov = await this.movies.find({
      relations: {
        playlists: true,
      },
    });
    const resp = [];
    mov.forEach((mv) => {
      const inPlaylist = mv.playlists.find((pl) => pl.id === +playlistId);
      if (inPlaylist) {
        resp.push(mv);
      }
    });
    if (!resp) {
      return [];
    }
    return resp;
  }
}
