import { useRef } from 'react';

export function useRange() {
  const ref = useRef<HTMLDivElement>(null);

  if (!ref.current) return;

  ref.current.childNodes.forEach((element) => {
    element.addEventListener('input', (event) => {
      let minVal = parseInt(priceInput[0].value);
      let maxVal = parseInt(priceInput[1].value);
    });
  });

  return { ref } as const;
}
