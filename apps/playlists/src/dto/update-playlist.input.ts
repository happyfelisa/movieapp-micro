import { Movie } from '../entities/movie,.entity';
import { CreatePlaylistInput } from './create-playlist.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePlaylistInput extends PartialType(CreatePlaylistInput) {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field(() => [Number])
  movies: number[];
}
