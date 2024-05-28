import { Dispatch, RefObject, useEffect, useRef } from 'react';
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

  const updateProgress = () => {
    if (progress.current) {
      const minVal = getFloatFromValuePrice(min);
      const maxVal = getFloatFromValuePrice(max);
      progress.current.style.left = (minVal / 100000) * 100 + '%';
      progress.current.style.right = 100 - (maxVal / 100000) * 100 + '%';
    }
  };

  useEffect(() => {
    if (ref.current) {
      const ranges = ref.current.childNodes as NodeListOf<HTMLInputElement>;
      ranges.forEach((ranges) => {
        ranges.addEventListener('input', () => {
          updateProgress();
        });
      });
    }
  }, [min, max]);

  return { ref } as const;
}
