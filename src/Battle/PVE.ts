import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    player: Fighter,
    private monsters: SimpleFighter[] | Fighter[],
  ) {
    super(player);
  }

  public fight(): number {
    this.monsters.forEach((monster) => monster.attack(this.player));
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}