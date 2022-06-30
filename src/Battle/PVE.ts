import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    player: Fighter,
    private monsters: SimpleFighter[],
  ) {
    super(player);
    this.monsters = monsters;
  }

  public fight(): number {
    this.monsters.forEach((monster: SimpleFighter) => {
      this.player.attack(monster);
      monster.attack(this.player);
    });
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}