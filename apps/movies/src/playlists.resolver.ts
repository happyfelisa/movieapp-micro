import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PlaylistType } from './entities/PlaylistType';
import { MoviesService } from './movies.service';
import { MovieType } from './entities/MovieType';

@Resolver(() => PlaylistType)
export class PlaylistResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @ResolveField(() => [MovieType])
  public movies(@Parent() playlist: PlaylistType) {
    return this.moviesService.forPlaylist(playlist.id);
  }
}
