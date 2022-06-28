import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static _instances = 0;
  private _energyType: EnergyType;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'mana';
    Mage._instances += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public set energyType(value: EnergyType) {
    this._energyType = value;
  }

  static createdArchetypeInstances(): number {
    return Mage._instances;
  }
}
