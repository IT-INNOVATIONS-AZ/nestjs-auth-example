import { Injectable } from '@nestjs/common';
import { CreateFavDto } from './dto/create-fav.dto';
import { UpdateFavDto } from './dto/update-fav.dto';

const favs = [
  {
    id: 1,
    name: 'My first fav',
    description: 'This is my first fav',
    userId: 1,
  },
  {
    id: 2,
    name: 'My second fav',
    description: 'This is my second fav',
    userId: 1,
  },
  {
    id: 3,
    name: 'My third fav',
    description: 'This is my third fav',
    userId: 2,
  },
];

@Injectable()
export class FavsService {
  create(createFavDto: CreateFavDto) {
    return favs.push(createFavDto);
  }

  findAll() {
    return favs;
  }

  findOne(id: number) {
    return favs.find((fav) => fav.id === id);
  }

  update(id: number, updateFavDto: UpdateFavDto) {
    return favs.map((fav) => {
      if (fav.id === id) {
        return {
          ...fav,
          ...updateFavDto,
        };
      }
      return fav;
    });
  }

  remove(id: number) {
    return favs.filter((fav) => fav.id !== id);
  }
}
