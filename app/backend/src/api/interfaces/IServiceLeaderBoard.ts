import ILeaderBoard from './ILeaderBoard';

export default interface IServiceLeaderBoard {
  getInfo(): Promise<ILeaderBoard[] | object[]>;
}
