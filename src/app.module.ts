/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt/dist';
import {env_val} from './config'



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './development.env',
    }),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: env_val['DB_HOST'],
    port: 3306,
    username: env_val['DB_USER'],
    password: env_val['DB_PASSWORD'],
    database: 'wordpress',
    entities: [User],
    synchronize:false,
    }),
    UsersModule,
   JwtModule.register({
    secret : 'secret',
    signOptions : {expiresIn : '1d'}

   })

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(){
    console.log(process.env.DB_HOST)
  }

}
