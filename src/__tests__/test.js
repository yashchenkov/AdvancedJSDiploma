import { calcTileType, calcHealthLevel } from '../js/utils';
import Character from '../js/Character';
import Bowman from '../js/Bowman';
import Swordsman from '../js/Swordsman';
import Magician from '../js/Magician';
import Vampire from '../js/Vampire';
import Undead from '../js/Undead';
import Daemon from '../js/Daemon';



test('testing fields view', () => {
  expect(calcTileType(0, 8)).toEqual('top-left');
  expect(calcTileType(7, 8)).toEqual('top-right');
  expect(calcTileType(8, 8)).toEqual('left');
  expect(calcTileType(15, 8)).toEqual('right');
  expect(calcTileType(2, 8)).toEqual('top');
  expect(calcTileType(59, 8)).toEqual('bottom');
  expect(calcTileType(56, 8)).toEqual('bottom-left');
  expect(calcTileType(63, 8)).toEqual('bottom-right');
});

test('testing creating Character object', () => {
  try {
    const char = new Character(4);
  } catch(err) {
    expect(err.message).toEqual('Нельзя создать персонажа класса Character');
  }

});

test('testing creating extended objects', () => {
  try {
    const bowman = new Bowman(2);
    const swordsman = new Swordsman(1);
    const magician = new Magician(2);
    const vampire = new Vampire(1);
    const undead = new Undead(2);
    const daemon = new Daemon(3);
  } catch (err) {
     expect(err.message).toEqual('Нельзя создать персонажа класса Character');
  }
  //expect(true).toEqual(true);
});