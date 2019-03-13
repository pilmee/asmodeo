export function isEmpty(value: any[]| object | string | number | any) {
  if (Array.isArray(value) || 'string' === typeof value) {
    return value.length === 0;
  }

  if (value instanceof Object) {
    return Object.keys(value).length === 0;
  }

  return false;
}
