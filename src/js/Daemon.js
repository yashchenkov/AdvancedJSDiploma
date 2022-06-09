import Character from './Character';

export default class Daemon extends Character {
	constructor(level) {
  	super(level);
  	this.attack = 10;
  	this.defence = 40;
  }
}