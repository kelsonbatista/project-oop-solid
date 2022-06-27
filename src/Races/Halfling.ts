import Race from './Race';

class Halfling extends Race {
  static _instances = 0;
  private _maxLifePoints: number;

  constructor(
    _name: string,
    _dexterity: number,
  ) {
    super(_name, _dexterity);
    this._maxLifePoints = 60;
    Halfling._instances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public set maxLifePoints(value: number) {
    this._maxLifePoints = value;
  }

  static createdRacesInstances(): number {
    return Halfling._instances;
  }
}

export default Halfling;
