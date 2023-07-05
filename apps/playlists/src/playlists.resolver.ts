import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
  ResolveReference,
} from '@nestjs/graphql';
import { PlaylistsService } from './playlists.service';

import { CreatePlaylistInput } from './dto/create-playlist.input';
import { PlaylistType } from './entities/PlaylistType';
import { UserType } from './entities/UserType';

@Resolver(() => PlaylistType)
export class PlaylistsResolver {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @Mutation(() => PlaylistType)
  createPlaylist(
    @Args('createPlaylistInput') createPlaylistInput: CreatePlaylistInput,
  ) {
    return this.playlistsService.create(createPlaylistInput);
  }

  @Query(() => [PlaylistType], { name: 'playlists' })
  findAll() {
    return this.playlistsService.findAll();
  }

  @Query(() => PlaylistType, { name: 'playlist' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.playlistsService.findOne(id);
  }

  /*@Mutation(() => PlaylistType)
  updatePlaylist(
    @Args('updatePlaylistInput') updatePlaylistInput: UpdatePlaylistInput,
  ) {
    return this.playlistsService.update(
      updatePlaylistInput.id,
      updatePlaylistInput,
    );
  }*/

  @Mutation(() => PlaylistType)
  removePlaylist(@Args('id', { type: () => Int }) id: number) {
    return this.playlistsService.remove(id);
  }

  @ResolveField(() => UserType)
  user(@Parent() playlist: PlaylistType): any {
    return { __typename: 'User', id: playlist.user.id };
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }) {
    return this.playlistsService.findOne(reference.id);
  }
}
