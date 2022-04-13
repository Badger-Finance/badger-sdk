import { keyBy } from '.';

describe('keyBy', () => {
  it('groups list items by given key', () => {
    const input = [
      { key: 'a', value: 1 },
      { key: 'b', value: 2 },
      { key: 'c', value: 3 },
      { key: 'a', value: 4 },
      { key: 'a', value: 5 },
      { key: 'b', value: 6 },
    ];
    const output = keyBy(input, (i) => i.key);
    const expected = new Map(
      Object.entries({
        a: [
          { key: 'a', value: 1 },
          { key: 'a', value: 4 },
          { key: 'a', value: 5 },
        ],
        b: [
          { key: 'b', value: 2 },
          { key: 'b', value: 6 },
        ],
        c: [{ key: 'c', value: 3 }],
      }),
    );
    expect(output).toMatchObject(expected);
  });
});
