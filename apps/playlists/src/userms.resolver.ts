import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PlaylistType } from './entities/PlaylistType';
import { UserType } from './entities/UserType';
import { PlaylistsService } from './playlists.service';

@Resolver(() => UserType)
export class UsermsResolver {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @ResolveField(() => [PlaylistType])
  public playlists(@Parent() user: UserType) {
    return this.playlistsService.forUser(user.id);
  }
}
