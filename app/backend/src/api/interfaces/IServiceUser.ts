import IToken from './IToken';
import IUser from './IUser';

export default interface IServiceUser {
  login(user: IUser): Promise<IToken>
}
