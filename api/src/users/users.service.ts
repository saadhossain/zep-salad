import { BadRequestException, Injectable } from '@nestjs/common';
import { FirebaseCollection } from 'src/config/collection';
import { OrmService } from 'src/orm/orm.service';
import { CreateUserDto } from './dto/create-user.dto';

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

  async getAllAdmins() {
    const fieldName = 'isAdmin';
    const fieldValue = true;
    const userCollection = FirebaseCollection.users;
    const data = await this.ormService.findDocumentsByFieldName(userCollection, fieldName, fieldValue);
    return data;
  }
}
