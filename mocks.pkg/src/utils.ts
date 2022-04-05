// do not use this in runtime
export function objDeepCopy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
