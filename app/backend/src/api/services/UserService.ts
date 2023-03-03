import { ModelStatic } from 'sequelize';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import Users from '../../database/models/UsersModel';
import IUser from '../interfaces/IUser';
import IServiceUser from '../interfaces/IServiceUser';
import IToken from '../interfaces/IToken';
import ErrorStatus from '../../errors/ErrorStatus';

const secret: string = process.env.JWT_SECRET || 'eugostodebatata';

export default class UserService implements IServiceUser {
  protected model: ModelStatic<Users> = Users;

  generateToken = (email: string, role: string) => jwt.sign({ email, role }, secret, {
    algorithm: 'HS256',
    expiresIn: '3h',
  });

  validateToken = (token: string) => {
    const uncryptedUser = jwt.verify(token, secret);
    return uncryptedUser;
  };

  async login(user: IUser): Promise<IToken> {
    const { email, password } = user;
    const userLogin = await this.model.findOne({ where: { email } });

    if (!userLogin) {
      throw new ErrorStatus('401', 'Invalid email or password');
    }

    const isValidPassword = bcrypt.compareSync(password, userLogin.password);
    if (!isValidPassword) {
      throw new ErrorStatus('401', 'Invalid email or password');
    }

    const token = this.generateToken(user.email, user.role);
    return { token };
  }

  async loginRole(authorization: string): Promise<string> {
    const { email } = this.validateToken(authorization) as jwt.JwtPayload;

    const user = await this.model.findOne({ where: { email } });
    if (!user) return '';

    return user.role;
  }
}
