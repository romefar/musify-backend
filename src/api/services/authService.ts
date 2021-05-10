import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

interface TokenData {
  id: string;
  email: string;
}

interface IAuthService {
  verifyToken: (token: string) => TokenData;
  signToken: (data: TokenData, expiration?: string | number) => string;
}

class AuthService implements IAuthService {
  signToken (data: TokenData, expiration?: string | number) {
    const signedToken = jwt.sign({ ...data }, JWT_SECRET, { expiresIn: expiration ?? '1h' });

    return signedToken;
  }

  verifyToken (token: string) {
    return jwt.verify(token, JWT_SECRET) as TokenData;
  }
}

export default new AuthService();
