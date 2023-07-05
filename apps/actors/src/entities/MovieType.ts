import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';
import { ActorType } from './ActorType';

@ObjectType()
@Directive('@key(fields: "id")')
export class MovieType {
  @Field(() => ID)
  id: number;

  @Field(() => [ActorType])
  actors?: ActorType[];
}
