export function formatSquare(value: number): string {
  return Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
}
