import { formatBalance } from "./tokens.utils";

describe('tokens.utils', () => {
  describe('formatBalance', () => {
    describe('given a valid big number input', () => {
      it.each([
        ['12345000000000000000', undefined, 12.345],
        ['12345000000000000000', 15, 12345],
        ['12345000000000000000', 12, 12345000],
        ['12345000000000000000', 21, 0.012345],
        ['12345000033000000000', 15, 12345.000033],
        ['00000000000000000000', undefined, 0],
        ['00000000000000000000', 15, 0],
        ['00000000000000000000', 21, 0],
      ])('Evaluates %s with %i decimals as %f', (input, decimals, result) => {
        expect(result).toEqual(formatBalance(input, decimals));
      });
    });
  });
});
