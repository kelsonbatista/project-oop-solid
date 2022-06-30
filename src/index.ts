import Battle, { PVP } from './Battle';
import PVE from './Battle/PVE';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

// 13.1
const player1 = new Character('Jose');
const player2 = new Character('Joao');
const player3 = new Character('Maria');
player1.levelUp();
player1.levelUp();
player1.levelUp();

// 13.2
const monster1 = new Monster();
const monster2 = new Dragon();

// 13.3
const pvp = new PVP(player2, player3);

// 13.4
const pve = new PVE(player1, [monster1, monster2]);

// 13.5
const runBattles = (battles: Battle[]): void => {
  battles.forEach((battle) => battle.fight());
};

console.log('App run');

export { player1, player2, player3 };
export { monster1, monster2 };
export { pvp };
export { pve };
export { runBattles };