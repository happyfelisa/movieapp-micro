import { CreatePlaylistInput } from './create-playlist.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePlaylistInput extends PartialType(CreatePlaylistInput) {
  @Field()
  name: string;
}
