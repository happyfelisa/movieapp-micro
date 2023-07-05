import { Injectable } from '@nestjs/common';
import { CreateActorInput } from './dto/create-actor.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Actor } from './entities/actor.entity';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';

@Injectable()
export class ActorsService {
  constructor(
    @InjectRepository(Actor)
    private readonly actors: Repository<Actor>,
    @InjectRepository(Movie)
    private readonly moviesRepo: Repository<Movie>,
  ) {}

  async create(createActorInput: CreateActorInput) {
    await this.actors.save(createActorInput);
    return createActorInput;
  }

  async findAll() {
    return await this.actors.find();
  }

  async findOne(id: number) {
    return await this.actors.findOne({ where: { id } });
  }

  async forMovie(movieId: number) {
    console.log('movie service', movieId);
    const acs = await this.actors.find({
      relations: {
        movies: true,
      },
    });
    console.log('ACS----', acs);
    const resp = [];
    acs.forEach((ac) => {
      const inMovie = ac.movies.find((a) => a.id === +movieId);
      if (inMovie) {
        resp.push(ac);
      }
    });
    if (!resp) {
      return [];
    }
    return resp;
  }
}
