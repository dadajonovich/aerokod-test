export function calcSpaces(value: string) {
  const result = value.replace(/[^\s]/g, '').length;
  return result;
}
