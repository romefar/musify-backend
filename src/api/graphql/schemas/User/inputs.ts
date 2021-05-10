import { Field, InputType } from 'type-graphql';
import { IsEmail, Length } from 'class-validator';
import { User } from './User';

@InputType()
export class UserInput implements Partial<User> {
  @Field()
  @Length(5, 40)
  name: string

  @Field()
  @Length(8, 32)
  password: string

  @Field()
  @IsEmail()
  email: string

  @Field({ nullable: true })
  image?: string
}

@InputType()
export class UserUpdatePasswordInput {
  @Field()
  id: string

  @Field()
  @Length(8, 32)
  oldPassword: string

  @Field()
  @Length(8, 32)
  newPassword: string
}
