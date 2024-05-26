export function getFloatFromValuePrice(value: string): number {
  return parseFloat(value.replace(/\s+/g, ''));
}
