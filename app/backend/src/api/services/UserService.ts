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

  generateToken = (email: string) => jwt.sign({ email }, secret, {
    algorithm: 'HS256',
    expiresIn: '3h',
  });

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

    const token = this.generateToken(user.email);
    return { token };
  }
}
