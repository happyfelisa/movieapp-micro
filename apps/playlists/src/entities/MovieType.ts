import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';
import { PlaylistType } from './PlaylistType';

@ObjectType()
@Directive('@key(fields: "id")')
export class MovieType {
  @Field(() => ID)
  id: number;

  @Field(() => [PlaylistType])
  playlists?: PlaylistType[];
}
