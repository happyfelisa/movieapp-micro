import { Module } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';
import { PlaylistsResolver } from './playlists.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { Playlist } from './entities/playlist.entity';
import { UsermsResolver } from './userms.resolver';
import { User } from './entities/userm.entity';
import { MoviesResolver } from './movies.resolver';
import { Movie } from './entities/movie,.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Playlist]),
    TypeOrmModule.forFeature([Movie]),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '0103',
      database: 'moviedb3',
      entities: [Playlist, User, Movie],
      synchronize: true,
    }),
  ],
  providers: [
    PlaylistsResolver,
    PlaylistsService,
    UsermsResolver,
    MoviesResolver,
  ],
})
export class PlaylistsModule {}
