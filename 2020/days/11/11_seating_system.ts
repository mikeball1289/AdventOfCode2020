import { converge } from '../../../lib/funcs';
import { openAoC } from '../../../lib/input/openAoC';
import { Map2d } from '../../../lib/Map2d';
import { count } from '../../../lib/math/settools';
import { SeatCA, SeatCell, seatCellChar } from '../../lib/SeatCA';

const initialState = openAoC('./2020/input/day11input.txt', ['\n', ''], seatCellChar);

const ca = new SeatCA(new Map2d(initialState));
const part1FinalState = converge(state => state.stepAdjacent(), ca, (a, b) => a.cells.toString() === b.cells.toString());

console.log(count(part1FinalState.cells.values(), SeatCell.FILLED_SEAT)); // 2275

const part2FinalState = converge(state => state.stepLineOfSight(), ca, (a, b) => a.cells.toString() === b.cells.toString());

console.log(count(part2FinalState.cells.values(), SeatCell.FILLED_SEAT)); // 2121
