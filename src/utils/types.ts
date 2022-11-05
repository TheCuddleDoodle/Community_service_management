/* eslint-disable prettier/prettier */
export type CreateWpUser = {
    ID : number;
    user_login: string;
    user_pass: string;
    user_nicename: string,
    user_email: string,
    user_url : string,
    user_registered : Date,
    user_activation_key : string,
    user_status : number,
    display_name : string,
  };


  export type findUser = {
    user_login: string;
    user_pass : string;
  }

  export type UpdateUserParams = {
    username: string;
    password: string;
  };

  export type CreateUserProfileParams = {
    firstName: string;
    lastName: string;
    age: number;
    dob: string;
  };


  export type CreateUserParams={
    username: string;
  }

  export type CreateUserPostParams = {
    title: string;
    description: string;
  };