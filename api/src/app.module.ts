import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReviewModule } from './review/review.module';
import { UsersModule } from './users/users.module';
import { OrmModule } from './orm/orm.module';

@Module({
  imports: [ReviewModule, UsersModule, OrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
