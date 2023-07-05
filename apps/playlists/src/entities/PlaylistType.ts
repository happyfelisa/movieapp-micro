import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';
import { UserType } from './UserType';

@ObjectType()
@Directive('@key(fields: "id")')
export class PlaylistType {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  userId: number;

  @Field(() => UserType)
  user: UserType;
}
