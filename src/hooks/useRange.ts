import { Dispatch, RefObject, useRef } from 'react';
import { getFloatFromValuePrice } from '../utils/getFloatFromValuePrice';
import { formatPrice } from '../utils/formatPrice';

export function useRange(
  min: string,
  max: string,
  setMin: Dispatch<React.SetStateAction<string>>,
  setMax: Dispatch<React.SetStateAction<string>>,
  progress: RefObject<HTMLDivElement>,
) {
  const ref = useRef<HTMLDivElement>(null);

  const priceGap = 1000;

  if (progress.current && ref.current && ref.current.childNodes.length > 0) {
    const ranges = ref.current.childNodes as NodeListOf<HTMLInputElement>;
    ranges.forEach((range) =>
      range.addEventListener('input', (event) => {
        let minVal = getFloatFromValuePrice(min);
        let maxVal = getFloatFromValuePrice(max);

        if (maxVal - minVal < priceGap) {
          if (
            event.target instanceof Element &&
            event.target.className === 'range-min'
          ) {
            const priceValue = maxVal - priceGap;
            ranges[0].value = String(priceValue);
            setMin(formatPrice(priceValue));
          } else {
            const priceValue = minVal - priceGap;
            ranges[0].value = String(priceValue);
            setMax(formatPrice(priceValue));
          }
        } else {
          ranges[0].value = String(minVal);
          ranges[1].value = String(maxVal);
          progress.current.style.left = (minVal / ranges[0].max) * 100 + '%';
          progress.current.style.right =
            100 - (maxVal / ranges[1].max) * 100 + '%';
        }
      }),
    );
  }

  return { ref } as const;
}
