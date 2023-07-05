import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { MovieType } from './entities/MovieType';
import { ActorsService } from './actors.service';
import { ActorType } from './entities/ActorType';

@Resolver(() => MovieType)
export class MoviesResolver {
  constructor(private readonly actorsService: ActorsService) {}

  @ResolveField(() => [ActorType])
  public actors(@Parent() movie: MovieType) {
    return this.actorsService.forMovie(movie.id);
  }
}
