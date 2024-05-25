import { ChangeEventHandler, Dispatch, useEffect, useRef } from 'react';
import { formatPrice } from '../utils/formatPrice';
import { calcSpaces } from '../utils/calcSpaces';

export function useInputPrice(
  price: string,
  setPrice: Dispatch<React.SetStateAction<string>>,
) {
  const ref = useRef<HTMLInputElement>(null);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const target = e.target;
    const value = target.value;

    const prevSpaces = calcSpaces(price);

    const valueWithoutSpaces = Number(value.replace(/\s+/g, ''));
    const formatedPrice = formatPrice(valueWithoutSpaces);
    const currentSpaces = calcSpaces(formatedPrice);
    const difSpaces = currentSpaces - prevSpaces;
    const selectionStart = (target.selectionStart || 0) + difSpaces;

    target.value = formatedPrice;

    target.setSelectionRange(selectionStart, selectionStart);
    setPrice(formatedPrice);
  };

  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.width = price.length + 'ch';
  }, [price]);

  return { ref, onChange } as const;
}
