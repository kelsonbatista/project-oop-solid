import { EnergyType } from '../Energy';

abstract class Archetype {
  private _special: number;
  private _cost: number;
  
  constructor(private _name: string) {
    this._special = 0;
    this._cost = 0;
  }

  public get name(): string {
    return this._name;
  }

  public get special(): number {
    return this._special;
  }

  public get cost(): number {
    return this._cost;
  }

  abstract get energyType(): EnergyType;
  
  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }
}

export default Archetype;
