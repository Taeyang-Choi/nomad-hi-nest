import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesServie: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesServie.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Movie {
    return this.moviesServie.getOne(id);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesServie.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesServie.deleteOne(id);
  }

  @Patch(':id')
  path(@Param('id') id: string, @Body() updateData) {
    return this.moviesServie.update(id, updateData);
  }
}
