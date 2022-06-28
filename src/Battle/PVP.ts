import Character from '../Character';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _player1: Character,
    private _player2: Character,
  ) {
    super(_player1);
  }

  public get player1(): Character {
    return this._player1;
  }

  public set player1(value: Character) {
    this._player1 = value;
  }

  public get player2(): Character {
    return this._player2;
  }
  
  public set player2(value: Character) {
    this._player2 = value;
  }

  public fight(): number {
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}
