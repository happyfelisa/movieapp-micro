import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';
import { MovieType } from './MovieType';

@ObjectType()
@Directive('@key(fields: "id")')
export class PlaylistType {
  @Field(() => ID)
  id: number;

  @Field(() => [MovieType])
  movies?: MovieType[];
}
