import { calcTileType, calcHealthLevel } from '../js/utils';

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