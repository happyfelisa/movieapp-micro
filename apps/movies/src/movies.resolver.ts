import {
  Resolver,
  Query,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { MoviesService } from './movies.service';
import { PlaylistType } from './entities/PlaylistType';
import { MovieType } from './entities/MovieType';

@Resolver(() => MovieType)
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Query(() => [MovieType], { name: 'movies' })
  findAll() {
    return this.moviesService.findAll();
  }

  @Query(() => MovieType, { name: 'movie' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.moviesService.findOne(id);
  }

  @ResolveField(() => PlaylistType)
  playlist(@Parent() movie: MovieType): any {
    return { __typename: 'Playlist', id: movie.playlists['id'] };
  }
}
