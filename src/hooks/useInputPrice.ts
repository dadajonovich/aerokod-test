import { ChangeEventHandler, Dispatch, useEffect, useRef } from 'react';
import { formatPrice } from '../utils/formatPrice';
import { calcSpaces } from '../utils/calcSpaces';
import { getFloatFromValuePrice } from '../utils/getFloatFromValuePrice';

export function useInputPrice(
  price: string,
  setPrice: Dispatch<React.SetStateAction<string>>,
) {
  const ref = useRef<HTMLInputElement>(null);

  const onInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const target = e.target;
    const value = target.value;

    const prevSpaces = calcSpaces(price);

    const valueWithoutSpaces = getFloatFromValuePrice(value);
    const formatedPrice = formatPrice(valueWithoutSpaces);
    const currentSpaces = calcSpaces(formatedPrice);
    // const difSpaces = currentSpaces - prevSpaces;
    const difSpaces =
      currentSpaces < prevSpaces ? 0 : currentSpaces - prevSpaces;
    console.log(`currentSpace - ${currentSpaces}, prevSpace - ${prevSpaces}`);

    const selectionStart = (target.selectionStart || 0) + difSpaces;
    console.log(`${target.selectionStart} + ${difSpaces} = ${selectionStart}`);

    target.value = formatedPrice;

    target.setSelectionRange(selectionStart, selectionStart);

    setPrice(formatedPrice);
  };

  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.width = price.length + 'ch';
  }, [price]);

  return { ref, onInput } as const;
}
