import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ActorsService } from './actors.service';
import { CreateActorInput } from './dto/create-actor.input';
import { MovieType } from './entities/MovieType';
import { ActorType } from './entities/ActorType';

@Resolver(() => ActorType)
export class ActorsResolver {
  constructor(private readonly actorsService: ActorsService) {}

  @Mutation(() => ActorType)
  createActor(@Args('createActorInput') createActorInput: CreateActorInput) {
    return this.actorsService.create(createActorInput);
  }

  @Query(() => [ActorType], { name: 'actors' })
  findAll() {
    return this.actorsService.findAll();
  }

  @Query(() => ActorType, { name: 'actor' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.actorsService.findOne(id);
  }

  @ResolveField(() => MovieType)
  playlist(@Parent() actor: ActorType): any {
    return { __typename: 'movies', id: actor.movies['id'] };
  }
}
