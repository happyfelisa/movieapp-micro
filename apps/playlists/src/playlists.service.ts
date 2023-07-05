import { Injectable, NotFoundException } from '@nestjs/common';
//import { CreatePlaylistInput } from './dto/create-playlist.input';
import { Playlist } from './entities/playlist.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlaylistInput } from './dto/create-playlist.input';
import { Movie } from './entities/movie,.entity';

@Injectable()
export class PlaylistsService {
  constructor(
    @InjectRepository(Playlist)
    private readonly playlists: Repository<Playlist>,
    @InjectRepository(Movie)
    private readonly moviesRepo: Repository<Movie>,
  ) {}
  /*async addMovieToPlaylist(playlistId: number, body): Promise<void> {
    const playlist = await this.playlistRepository.findOne({
      where: {
        id: playlistId,
      },
      relations: {
        movies: true,
      },
    });
    const movie = await this.movieRepository.findOne({
      where: {
        id: body.movieId,
      },
    });
    console.log(playlist);
    if (playlist && movie) {
      playlist.movies.push(movie);
      console.log(playlist);
      await this.playlistRepository.save(playlist);
    }
  }
  */
  async create(createPlaylistInput: CreatePlaylistInput) {
    this.playlists.save(createPlaylistInput);
    return createPlaylistInput;
  }

  /*async editPlaylist(id: number, body: any) {
    const playlist = await this.playlists.findOne({
      where: {
        id: id,
      },
      relations: {
        movies: true,
      },
    });
    if (!playlist) throw new NotFoundException();
    playlist.name = body.name;
    playlist.movies = [];
    console.log(playlist);
    const movies = await this.movieRepository.find({
      where: {
        id: In(body.movies),
      },
    });
    console.log(body);
    playlist.movies = movies;
    console.log(playlist);
    return await this.playlistRepository.save(playlist);
  }
  */

  async remove(id: number): Promise<void> {
    const playlist = await this.playlists.findOne({
      where: {
        id: id,
      },
    });
    if (!playlist) throw new NotFoundException();
    await this.playlists.remove(playlist);
  }

  async findAll(): Promise<Playlist[]> {
    const quaker = await this.playlists.find();
    console.log('2312321312321313');
    console.log(JSON.stringify(quaker[0].user));
    console.log(quaker[0].user['id']);
    console.log(await this.playlists.find());
    return this.playlists.find();
  }

  async findOne(id: number) {
    const pls = await this.playlists.find();
    return pls.find((pl) => pl.id === +id); /*
      relations: {
        movies: true,
      },
    */
  }

  async forUser(userId: number) {
    console.log('ccockerwild');
    const pls = await this.playlists.find();
    console.log(pls);
    return pls.filter((pl) => pl.userId === +userId);
  }

  async forMovie(movieId: number) {
    console.log('for movie');
    const pls = await this.playlists.find({ relations: { movies: true } });
    const resp = [];
    pls.forEach((pl) => {
      const inPlaylist = pl.movies.filter((p) => p.id === +movieId);
      if (inPlaylist) {
        resp.push(pl);
      }
    });
    if (!resp) {
      return [];
    }
    return resp;
  }
}
