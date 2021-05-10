import mongoose from 'mongoose';
import { IUser } from '../interfaces';
import bcrypt from 'bcryptjs';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  image: {
    type: String
  },
  provider: {
    type: String
  }
}, {
  timestamps: true
});

userSchema.pre('save', async function (this: IUser, next: Function) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }

  try {
    const hashedPassword = await bcrypt.hash(user.password, 8);
    user.password = hashedPassword;

    return next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.toJSON = function (): Partial<IUser> {
  const user = this as IUser;

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    provider: user.provider,
    image: user.image
  };
};

const User = model<IUser>('User', userSchema);

export { User };
