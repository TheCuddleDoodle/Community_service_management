/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { User } from '../../../typeorm/entities/User';
import {
  CreateWpUser,
  findUser,

} from '../../../utils/types';

@Injectable()
export class UsersService {
  constructor(
   @InjectRepository(User) private userRepository: Repository<User>,

  ) {}

  findUsers() {
    return this.userRepository.find();
  }

  findUserBy(userDetails:findUser){
    return this.userRepository.findOneBy(userDetails)
  }

  register_user(userDetails: CreateWpUser){
    userDetails.user_registered = new Date();

    return this.userRepository.save(userDetails);
  }



  // createUser(userDetails: CreateUserParams) {
  //   const newUser = this.userRepository.create({
  //     ...userDetails,
  //     createdAt: new Date(),
  //   });
  //   return this.userRepository.save(newUser);
  // }

  // updateUser(ID: number, updateUserDetails: UpdateUserParams) {
  //   return this.userRepository.update({ ID }, { ...updateUserDetails });
  // }

  deleteUser(ID: number) {
    return this.userRepository.delete({ ID });
  }

  // async createUserProfile(
  //   ID : number,
  //   createUserProfileDetails: CreateUserProfileParams,
  // ) {
  //   const user = await this.userRepository.findOneBy({ID});
  //   if (!user)
  //     throw new HttpException(
  //       'User not found. Cannot create Profile',
  //       HttpStatus.BAD_REQUEST,
  //     );
  //   const newProfile = this.profileRepository.create(createUserProfileDetails);
  //   const savedProfile = await this.profileRepository.save(newProfile);
  //   user.profile = savedProfile;
  //   return this.userRepository.save(user);
  // }

  // async createUserPost(
  //  ID : number,
  //   createUserPostDetails: CreateUserPostParams,
  // ) {
  //   const user = await this.userRepository.findOneBy({ID});
  //   if (!user)
  //     throw new HttpException(
  //       'User not found. Cannot create Profile',
  //       HttpStatus.BAD_REQUEST,
  //     );
  //   const newPost = this.postRepository.create({
  //     ...createUserPostDetails,
  //     user,
  //   });
  //   return this.postRepository.save(newPost);
  // }
}
