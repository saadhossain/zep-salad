import { BadRequestException, Injectable } from '@nestjs/common';
import { FirebaseCollection } from 'src/config/collection';
import { OrmService } from 'src/orm/orm.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private ormService: OrmService) { }
  async registerUser(user: CreateUserDto) {
    try {
      const existUser = await this.ormService.findExistDocumentById(
        FirebaseCollection.users, user.userId
      );
      if (existUser) {
        return user;
      } else {
        await this.ormService.insertDocumentByCustomId(
          FirebaseCollection.users,
          user.userId,
          user,
        );
      }
      return user;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
