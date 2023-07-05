import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesResolver } from './movies.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Playlist } from './entities/playlist.entity';
import { PlaylistResolver } from './playlists.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie]),
    TypeOrmModule.forFeature([Playlist]),
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
      entities: [Movie, Playlist],
      synchronize: true,
    }),
  ],
  providers: [MoviesResolver, MoviesService, PlaylistResolver],
})
export class MoviesModule {}
