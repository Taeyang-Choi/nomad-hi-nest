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
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie-dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesServie: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesServie.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number): Movie {
    return this.moviesServie.getOne(id);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesServie.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.moviesServie.deleteOne(id);
  }

  @Patch(':id')
  path(@Param('id') id: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesServie.update(id, updateData);
  }
}
