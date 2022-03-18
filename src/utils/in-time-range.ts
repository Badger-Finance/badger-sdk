export function inTimeRange(
  target: any,
  _propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  // const method = descriptor.value;

  descriptor.value = function () {
    const keys = Reflect.ownKeys(target);
    console.log(keys);
  };
}
