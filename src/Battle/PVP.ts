import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private _player1: Fighter, private _player2: Fighter) {
    super(_player1);
    this._player2 = _player2;
  }

  public fight(): number {
    if (this._player1.lifePoints > 0 && this._player2.lifePoints > 0) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}
