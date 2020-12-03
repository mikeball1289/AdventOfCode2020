import { Point } from './math/Point';
import { TreeField } from './trees';

describe('TreeField', () => {
    describe('constructor', () => {
        it('should throw an error when trying to place a tree out of bounds', () => {
            const treeCoords = [[0, 0], [1, 1], [2, 2], [3, 3]];
            const testFn = () => new TreeField(2, 2, treeCoords.map(([x, y]) => new Point(x, y)));

            expect(testFn).toThrowError();
        });

        it('should validate if all trees are in bounds', () => {
            const treeCoords = [[0, 0], [1, 1]];
            const field = new TreeField(2, 2, treeCoords.map(([x, y]) => new Point(x, y)));

            expect(field).toBeDefined();
        });

        it('should be fine with no trees', () => {
            const field = new TreeField(0, 0, []);
            expect(field).toBeDefined();
        });
    });

    describe('fromText', () => {
        it('should throw an error when receiving non-rectangular text', () => {
            const text =
                '#.\n' +
                '.#.';
            const testFn = () => TreeField.fromText(text);

            expect(testFn).toThrowError();
        });

        it('should parse valid input text', () => {
            const text =
                '#.#\n' +
                '.#.';
            const field = TreeField.fromText(text);

            expect(field.width).toBe(3);
            expect(field.height).toBe(2);
            expect(field.trees.map(t => t.toString())).toStrictEqual(['(0, 0)', '(2, 0)', '(1, 1)']);
        });
    });

    describe('collisions', () => {
        it('should count the number of trees that exist along a given trajectory', () => {
            const text =
`..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;
            const field = TreeField.fromText(text);

            expect(field.collisions(new Point(3, 1))).toBe(7);
        })
    });
});