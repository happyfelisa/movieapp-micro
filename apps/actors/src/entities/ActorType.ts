import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';
import { MovieType } from './MovieType';

@ObjectType()
@Directive('@key(fields: "id")')
export class ActorType {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field(() => [MovieType])
  movies?: MovieType[];
}
