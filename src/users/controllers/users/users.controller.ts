/* eslint-disable prettier/prettier */
import {
    Ip,
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Req,
    Res,
    ParseIntPipe,
    Post,
    Put,
    BadRequestException,
    UnauthorizedException
  } from '@nestjs/common';
  import { NOTIMP } from 'dns';
  import { FindUser } from '../../dtos/FindUser.dto';
  import { UsersService } from '../../services/users/users.service';
  import * as bcrypt from 'bcrypt';
  import { JwtService } from '@nestjs/jwt';
  import { Response, Request } from 'express';

  @Controller('users')
  export class UsersController {
    // id : {};
    constructor(private userService: UsersService, private JwtService : JwtService) {}
    @Get()
    getUsers() {
      return this.userService.findUsers()
    }

    @Post('/login')
    async login_user(
      @Body() getusers : FindUser,
      @Res({passthrough : true}) response : Response

      ){

      const user =  await this.userService.findUserBy(getusers)

      if(!user){
        throw new BadRequestException('invalid credentials')
      }


      const jwt = await this.JwtService.signAsync({id : user.ID})
      response.cookie('jwt',jwt,{httpOnly:true});

      return {
        message : 'success'
      }
    }

    // @Post('/register')
    // async register_user(@Body() wpusers : CreateUserDto){
    //   //wpusers.user_pass = await bcrypt.hash(wpusers.user_pass,10);
    //   await this.userService.register_user(wpusers)
    //   return wpusers;
    // }


    @Get('/profile')
    async getuser
    (@Req() request : Request
    ){
      try{
        const cookie = request.cookies['jwt'];
        const data = await this.JwtService.verifyAsync(cookie)
       if(!data){
          throw new UnauthorizedException('unauthorized')
            }

            // const user = await this.userService.findUserBy({id :data['id']})
            return data;
          }


      catch(err){
        throw new UnauthorizedException('unauthorized')
      }

    }
    // @Get('/getip')
    // getIp(@Ip() ip :string){
    //   return ip;
    // }

    // @Post()
    // getVisitor(){
    //   return this.userService.findVisitors();
    // }


    //one to many relationship


    // @Post()
    // createUser(@Body() createUserDto: CreateUserDto) {
    //   return this.userService.createUser(createUserDto);
    // }

    // @Put(':id')
    // async updateUserById(
    //   @Param('id', ParseIntPipe) id: number,
    //   @Body() updateUserDto: UpdateUserDto,
    // ) {
    //   await this.userService.updateUser(id, updateUserDto);
    // }

    // @Delete(':id')
    // async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    //   await this.userService.deleteUser(id);
    // }

    // @Post(':id/profiles')
    // createUserProfile(
    //   @Param('id', ParseIntPipe) id: number,
    //   @Body() createUserProfileDto: CreateUserProfileDto,
    // ) {
    //   return this.userService.createUserProfile(id, createUserProfileDto);
    // }

    // @Post(':id/posts')
    // createUserPost(
    //   @Param('id', ParseIntPipe) id: number,
    //   @Body() createUserPostDto: CreateUserPostDto,
    // ) {
    //   return this.userService.createUserPost(id, createUserPostDto);
    // }
  }
