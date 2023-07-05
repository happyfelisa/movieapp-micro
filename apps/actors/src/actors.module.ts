import { Module } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { ActorsResolver } from './actors.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actor } from './entities/actor.entity';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Movie } from './entities/movie.entity';
import { MoviesResolver } from './movies.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Actor]),
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
      entities: [Actor, Movie],
      synchronize: true,
    }),
  ],
  providers: [ActorsResolver, ActorsService, MoviesResolver],
})
export class ActorsModule {}
