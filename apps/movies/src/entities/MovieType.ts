import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';
import { PlaylistType } from './PlaylistType';

@ObjectType()
@Directive('@key(fields: "id")')
export class MovieType {
  @Field(() => ID)
  id: number;

  @Field()
  tmdbId: string;

  @Field()
  title: string;

  @Field()
  overview: string;

  @Field()
  posterPath: string;

  @Field(() => [PlaylistType])
  playlists?: PlaylistType[];
}
