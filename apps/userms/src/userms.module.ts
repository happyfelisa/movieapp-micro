import { Module } from '@nestjs/common';
import { UsermsService } from './userms.service';
import { UsermsResolver } from './userms.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { User } from './entities/userm.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
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
      entities: [User],
      synchronize: true,
    }),
  ],
  providers: [UsermsResolver, UsermsService],
})
export class UsermsModule {}
