/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  @Entity({ name: 'wp_users' })
  export class User {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    ID: number;

    @Column({ unique: true })
    user_login: string;

    @Column()
    user_pass: string;

    @Column()
    user_email: string;

    @Column()
    user_registered: Date;

    // @Column({ nullable: true })
    // authStrategy: string;

    // @OneToOne(() => Profile)
    // @JoinColumn()
    // profile: Profile;

    // @OneToMany(() => Post, (post) => post.user)
    // posts: Post[];
  }
