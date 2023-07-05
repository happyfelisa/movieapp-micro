import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class UserType {
  @Field(() => ID)
  id: number;

  @Field()
  username: string;

  @Field()
  password: string;
}
