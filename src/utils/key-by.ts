export function keyBy<T = unknown, K = unknown>(
  array: T[],
  iteratee: (record: T) => K,
): Map<K, T[]> {
  const map = new Map<K, T[]>();
  for (const record of array) {
    const key = iteratee(record);
    const values = map.get(key) ?? [];
    values.push(record);
    map.set(key, values);
  }
  return map;
}
