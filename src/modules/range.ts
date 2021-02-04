/**
 * Creates a range of numbers within an array;
 *
 * ```typescript
 * const oneThroughTen = [...range(1, 10)]
 *
 * console.log(oneThroughTen) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * ```
 * @param start
 * @param end
 */
export default function* range(start: number, end: number): Generator<number> {
  for (let i: number = start; i <= end; i++) {
    yield i;
  }
};
