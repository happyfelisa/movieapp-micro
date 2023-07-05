import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PlaylistType } from './entities/PlaylistType';
import { MovieType } from './entities/MovieType';
import { PlaylistsService } from './playlists.service';

@Resolver(() => MovieType)
export class MoviesResolver {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @ResolveField(() => [PlaylistType])
  public playlists(@Parent() movie: MovieType) {
    return this.playlistsService.forMovie(movie.id);
  }
}
