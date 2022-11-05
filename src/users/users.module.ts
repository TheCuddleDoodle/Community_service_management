/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../typeorm/entities/User';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { JwtModule } from '@nestjs/jwt/dist';

@Module({
  imports: [TypeOrmModule.forFeature([User])
  ,JwtModule.register({
    secret :'secret',
    signOptions :{expiresIn : '1d'}
  })],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
